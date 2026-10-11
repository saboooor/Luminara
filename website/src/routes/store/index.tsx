import { billingSuffix, savingsLabel } from '~/lib/package-price';
import { paidRanks } from '~/components/paid-ranks';
import { component$, useSignal, useVisibleTask$ } from '@qwik.dev/core';
import {
  Form,
  routeAction$,
  routeLoader$,
  useLocation,
  z,
  zod$,
  type DocumentHead,
} from '@qwik.dev/router';
import ShoppingCart from 'lucide-icons-qwik/icons/ShoppingCart';
import User from 'lucide-icons-qwik/icons/User';
import Loader2 from 'lucide-icons-qwik/icons/Loader2';
import Sparkles from 'lucide-icons-qwik/icons/Sparkles';
import X from 'lucide-icons-qwik/icons/X';
import {
  getPackages,
  getCategories,
  getStoreSidebar,
  hostedStoreUrl,
  tebexRequest,
  type Basket,
  type StorePackage,
  type StoreCategory,
} from '~/lib/tebex';

export const useStorePackages = routeLoader$(async ({ env }) => {
  const token = env.get('TEBEX_HEADLESS_TOKEN')?.trim();
  if (!token) {
    console.warn(
      '[store] TEBEX_HEADLESS_TOKEN is missing from the server environment.'
    );
    return {
      packages: [] as StorePackage[],
      categories: [] as StoreCategory[],
      unavailable: true,
    };
  }
  try {
    const categories = await getCategories(token);
    return {
      packages: categories.flatMap((item) => item.packages ?? []),
      categories,
      unavailable: false,
    };
  } catch (error) {
    console.error(
      '[store] Package loading failed:',
      error instanceof Error ? error.message : 'Unknown error'
    );
    return {
      packages: [] as StorePackage[],
      categories: [] as StoreCategory[],
      unavailable: true,
    };
  }
});

export const useStoreSidebar = routeLoader$(async ({ env }) => {
  const token = env.get('TEBEX_HEADLESS_TOKEN')?.trim();
  if (!token) return { recent: null, featured: null };
  try {
    return await getStoreSidebar(token);
  } catch {
    return { recent: null, featured: null };
  }
});

export const useCheckout = routeAction$(
  async (data, { env, url, redirect, cookie }) => {
    const token = env.get('TEBEX_HEADLESS_TOKEN')?.trim();
    if (!token)
      return {
        message:
          'The store is temporarily unavailable. Please use our Tebex store below.',
      };
    let checkoutUrl: string;
    try {
      const packages = await getPackages(token);
      const pkg = packages.find((item) => String(item.id) === data.packageId);
      if (!pkg)
        return {
          message:
            'This package is no longer available. Please refresh the store.',
        };
      const accountPath = `/accounts/${encodeURIComponent(token)}`;
      const { data: basket } = await tebexRequest<{ data: Basket }>(
        `${accountPath}/baskets`,
        {
          username: data.username,
          complete_url: new URL('/store?checkout=complete', url.origin).href,
          cancel_url: new URL('/store', url.origin).href,
          complete_auto_redirect: true,
        }
      );
      if (!basket.username) {
        const auth = await tebexRequest<{ name: string; url: string }[]>(
          `${accountPath}/baskets/${encodeURIComponent(basket.ident)}/auth?returnUrl=${encodeURIComponent(new URL('/store/checkout', url.origin).href)}`
        );
        if (!auth[0]?.url)
          throw new Error('Basket username was not authorized');
        cookie.set(
          'tebex-checkout',
          { basket: basket.ident, packageId: data.packageId, type: pkg.type },
          {
            httpOnly: true,
            secure: url.protocol === 'https:',
            sameSite: 'lax',
            path: '/store',
            maxAge: 1800,
          }
        );
        checkoutUrl = auth[0].url;
      } else {
        await tebexRequest(
          `/baskets/${encodeURIComponent(basket.ident)}/packages`,
          {
            package_id: data.packageId,
            quantity: 1,
            type: pkg.type,
          }
        );
        const updated = await tebexRequest<{ data: Basket }>(
          `${accountPath}/baskets/${encodeURIComponent(basket.ident)}`
        );
        const checkout = new URL(updated.data.links.checkout);
        if (
          checkout.protocol !== 'https:' ||
          !checkout.hostname.endsWith('.tebex.io')
        )
          throw new Error('Invalid checkout URL');
        checkoutUrl = checkout.href;
      }
    } catch {
      return {
        message:
          'We could not start checkout. Please try again or use our Tebex store below.',
      };
    }
    throw redirect(303, checkoutUrl);
  },
  zod$({
    username: z
      .string()
      .trim()
      .regex(
        /^[a-zA-Z0-9_]{3,16}$/,
        'Enter a Minecraft Java username (3–16 letters, numbers, or underscores).'
      ),
    packageId: z.string().regex(/^\d+$/, 'Please select a package.'),
  })
);

export default component$(() => {
  const store = useStorePackages();
  const sidebar = useStoreSidebar();
  const location = useLocation();
  const checkout = useCheckout();
  const username = useSignal('');
  const usernameDialog = useSignal<HTMLDialogElement>();
  const modalOpen = useSignal(false);
  const modalVisible = useSignal(false);

  // oxlint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    ({ track, cleanup }) => {
      const open = track(() => modalOpen.value);
      const dialog = usernameDialog.value;
      let frame: number | undefined;
      let timer: ReturnType<typeof setTimeout> | undefined;
      if (open) {
        if (!dialog?.open) dialog?.showModal();
        frame = requestAnimationFrame(() => {
          modalVisible.value = true;
        });
      } else {
        modalVisible.value = false;
        timer = setTimeout(() => {
          if (!modalOpen.value) dialog?.close();
        }, 300);
      }
      cleanup(() => {
        if (frame !== undefined) cancelAnimationFrame(frame);
        if (timer !== undefined) clearTimeout(timer);
      });
    },
    { strategy: 'document-ready' }
  );
  const selectedPackage = useSignal<StorePackage | null>(null);
  const category = useSignal('');
  const categories = store.value.categories;
  const selectedCategory =
    categories.find((item) => String(item.id) === category.value) ??
    categories[0];

  return (
    <section class="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 pt-28 pb-24">
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h1 class="flex items-center gap-3 text-4xl font-extrabold">
            <ShoppingCart size={36} /> Store
          </h1>
          <p class="text-lum-text-secondary mt-3">
            Support Luminara and discover something special for your next
            adventure.
          </p>
        </div>
      </div>
      {location.url.searchParams.get('checkout') === 'error' && (
        <p
          role="alert"
          class="lum-card border border-red-400/30 bg-red-500/10 text-red-200"
        >
          We could not finish account authorization. Please try again or visit
          our hosted store below.
        </p>
      )}
      {location.url.searchParams.get('checkout') === 'complete' && (
        <p role="status" class="lum-card lum-grad-bg-lum-card-bg/20">
          Thanks for supporting Luminara! Check your Tebex receipt for payment
          and delivery details.
        </p>
      )}
      {checkout.value?.message && (
        <p
          role="alert"
          class="lum-card border border-red-400/30 bg-red-500/10 text-red-200"
        >
          {checkout.value.message}
        </p>
      )}
      <div
        class={{
          'grid items-start gap-6': true,
          'lg:grid-cols-[minmax(0,1fr)_20rem]': Boolean(
            sidebar.value.featured || sidebar.value.recent
          ),
        }}
      >
        <div class="flex min-w-0 flex-col gap-6">
          {categories.length > 0 && (
            <div
              class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
              aria-label="Store categories"
            >
              {categories.map((item) => {
                const rank = paidRanks.find((rank) => rank.name === item.name);
                const Icon = rank?.icon;
                return (
                  <button
                    key={item.id}
                    class={{
                      'lum-card lum-grad-bg-lum-card-bg/20 relative isolate cursor-pointer overflow-clip text-left duration-200!': true,
                      'ring-2 ring-pink-400': selectedCategory?.id === item.id,
                    }}
                    aria-pressed={selectedCategory?.id === item.id}
                    onClick$={() => {
                      category.value = String(item.id);
                    }}
                  >
                    {Icon && (
                      <Icon class="pointer-events-none absolute inset-0 z-0 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
                    )}
                    {Icon ? (
                      <Icon class="h-auto w-12 shrink-0" />
                    ) : item.image_url ? (
                      <img
                        src={item.image_url}
                        alt={item.name}
                        width={56}
                        height={56}
                        class="h-auto w-12 shrink-0 object-contain"
                      />
                    ) : (
                      <Sparkles size={40} class="shrink-0 text-pink-300" />
                    )}
                    <span class="relative z-10 flex items-center gap-4">
                      <span class="min-w-0">
                        <span class="flex items-center gap-2 text-xl font-bold">
                          {rank?.name ?? item.name}
                        </span>
                        {rank && (
                          <span class="text-lum-text-secondary block">
                            {rank.pricing}
                          </span>
                        )}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          )}
          {store.value.packages.length === 0 ? (
            <div class="lum-card lum-grad-bg-lum-card-bg/20 flex flex-col items-center gap-4 py-12 text-center">
              <Sparkles size={40} />
              <h2 class="text-2xl font-bold">
                {store.value.unavailable
                  ? 'Visit our Tebex store'
                  : 'No packages available yet'}
              </h2>
              <p class="text-lum-text-secondary">
                {store.value.unavailable
                  ? 'Our packages are temporarily unavailable here. You can still browse the store on Tebex.'
                  : 'Check back soon for more ways to support Luminara.'}
              </p>
              <a href={hostedStoreUrl} class="lum-btn lum-grad-bg-pink-500/20">
                <ShoppingCart size={20} /> Open Tebex store
              </a>
            </div>
          ) : (
            <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {!selectedCategory?.packages?.length && (
                <p class="text-lum-text-secondary col-span-full py-8 text-center">
                  No packages are available in this category yet.
                </p>
              )}
              {store.value.packages
                .filter((pkg) => pkg.category.id === selectedCategory?.id)
                .map((pkg) => (
                  <article
                    key={pkg.id}
                    class="lum-card lum-grad-bg-lum-card-bg/20 flex flex-col gap-4 overflow-hidden"
                  >
                    <div>
                      <p class="text-lum-text-secondary text-sm">
                        {pkg.category.name}
                      </p>
                      <h2 class="text-2xl font-bold">{pkg.name}</h2>
                    </div>
                    <div
                      class="store-description text-lum-text-secondary"
                      dangerouslySetInnerHTML={pkg.description}
                    />
                    <p class="text-xl font-bold">
                      {new Intl.NumberFormat('en', {
                        style: 'currency',
                        currency: pkg.currency,
                      }).format(pkg.total_price)}
                      <span class="text-lum-text-secondary text-sm">
                        {billingSuffix(pkg)}
                      </span>
                    </p>
                    {savingsLabel(pkg, store.value.packages) && (
                      <p class="text-sm font-semibold text-green-300">
                        {savingsLabel(pkg, store.value.packages)}
                      </p>
                    )}
                    <button
                      type="button"
                      class="lum-btn lum-grad-bg-pink-500/20 mt-auto w-full disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={checkout.isRunning}
                      onClick$={() => {
                        selectedPackage.value = pkg;
                        modalOpen.value = true;
                      }}
                    >
                      <ShoppingCart size={20} /> Purchase
                    </button>
                  </article>
                ))}
            </div>
          )}
          {selectedCategory?.description && (
            <div
              class="markdown flex justify-evenly"
              aria-live="polite"
              dangerouslySetInnerHTML={selectedCategory.description}
            />
          )}
        </div>
        {(sidebar.value.featured || sidebar.value.recent) && (
          <aside
            class="flex min-w-0 flex-col gap-4"
            aria-label="Store highlights"
          >
            {sidebar.value.featured && (
              <article class="lum-card lum-grad-bg-lum-card-bg/20 flex flex-col gap-4">
                <h2 class="flex items-center gap-2 text-2xl font-bold">
                  <Sparkles size={24} /> {sidebar.value.featured.header}
                </h2>
                <h3 class="text-xl font-bold">
                  {sidebar.value.featured.package.name}
                </h3>
                <div
                  class="store-description text-lum-text-secondary"
                  dangerouslySetInnerHTML={
                    sidebar.value.featured.package.description
                  }
                />
                <p class="text-xl font-bold">
                  {new Intl.NumberFormat('en', {
                    style: 'currency',
                    currency: sidebar.value.featured.package.currency,
                  }).format(sidebar.value.featured.package.total_price)}
                  <span class="text-lum-text-secondary text-sm">
                    {billingSuffix(sidebar.value.featured.package)}
                  </span>
                </p>
                {savingsLabel(
                  sidebar.value.featured.package,
                  store.value.packages
                ) && (
                  <p class="text-sm font-semibold text-green-300">
                    {savingsLabel(
                      sidebar.value.featured.package,
                      store.value.packages
                    )}
                  </p>
                )}
                <button
                  type="button"
                  class="lum-btn lum-grad-bg-pink-500/20 w-full disabled:opacity-50"
                  disabled={checkout.isRunning}
                  onClick$={() => {
                    selectedPackage.value = sidebar.value.featured!.package;
                    modalOpen.value = true;
                  }}
                >
                  <ShoppingCart size={20} /> Purchase
                </button>
              </article>
            )}
            {sidebar.value.recent && (
              <section
                class="lum-card lum-grad-bg-lum-card-bg/20 flex flex-col gap-4"
                aria-labelledby="recent-payments-title"
              >
                <h2 id="recent-payments-title" class="text-2xl font-bold">
                  {sidebar.value.recent.header}
                </h2>
                {sidebar.value.recent.payments.length === 0 ? (
                  <p class="text-lum-text-secondary">No recent payments yet.</p>
                ) : (
                  <ul class="flex flex-col gap-4">
                    {sidebar.value.recent.payments.map((payment, index) => (
                      <li
                        key={`${payment.username_id}-${payment.created_at ?? index}`}
                        class="flex items-start gap-3"
                      >
                        {payment.avatar_url && (
                          <img
                            src={payment.avatar_url}
                            alt={`${payment.username}'s avatar`}
                            width={40}
                            height={40}
                            class="h-10 w-10 shrink-0 rounded-lg"
                            loading="lazy"
                          />
                        )}
                        <div class="min-w-0 flex-1">
                          <p class="font-bold">{payment.username}</p>
                          <p class="text-lum-text-secondary text-sm">
                            {payment.package.name}
                          </p>
                          {payment.created_at && (
                            <time
                              dateTime={payment.created_at}
                              class="text-lum-text-secondary text-xs"
                            >
                              {new Intl.DateTimeFormat('en', {
                                dateStyle: 'medium',
                                timeZone: 'America/Toronto',
                              }).format(new Date(payment.created_at))}
                            </time>
                          )}
                        </div>
                        {payment.price != null && payment.currency && (
                          <span class="shrink-0 text-sm font-semibold">
                            {new Intl.NumberFormat('en', {
                              style: 'currency',
                              currency: payment.currency,
                            }).format(payment.price)}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}
          </aside>
        )}
      </div>
      <dialog
        ref={usernameDialog}
        aria-labelledby="checkout-title"
        class={{
          'text-lum-text m-0 flex h-full max-h-none w-full max-w-none items-center justify-center border-none bg-transparent p-4 transition-all duration-300 outline-none motion-reduce:transition-none lg:p-8': true,
          'pointer-events-none scale-95 opacity-0 backdrop:opacity-0':
            !modalVisible.value,
          'scale-100 opacity-100 backdrop:opacity-100': modalVisible.value,
          'backdrop:bg-black/20 backdrop:backdrop-blur-sm backdrop:transition-all backdrop:duration-300': true,
        }}
        onCancel$={(event) => {
          event.preventDefault();
          modalOpen.value = false;
        }}
        onClick$={(event, dialog) => {
          if (event.target === dialog) modalOpen.value = false;
        }}
      >
        <div class="lum-card lum-grad-bg-gray-900/95 rounded-lum relative z-10 max-h-[90vh] w-full max-w-md overflow-y-auto border border-gray-800 p-6 drop-shadow-2xl backdrop-blur-2xl">
          <div class="mb-4 flex items-center justify-between gap-4">
            <h2 id="checkout-title" class="text-2xl font-bold">
              Minecraft username
            </h2>
            <button
              type="button"
              aria-label="Close checkout"
              class="lum-btn lum-bg-transparent p-2"
              onClick$={() => {
                modalOpen.value = false;
              }}
            >
              <X size={20} />
            </button>
          </div>
          <p class="text-lum-text-secondary mb-4">
            Enter the Java username that should receive{' '}
            {selectedPackage.value?.name}.
          </p>
          <Form action={checkout} class="flex flex-col gap-4">
            <label
              for="checkout-username"
              class="flex items-center gap-2 font-bold"
            >
              <User size={20} /> Minecraft username
            </label>
            <input
              id="checkout-username"
              name="username"
              class="lum-input w-full"
              placeholder="Notch"
              autoComplete="username"
              minLength={3}
              maxLength={16}
              pattern="[a-zA-Z0-9_]{3,16}"
              required
              autoFocus
              bind:value={username}
              aria-describedby="checkout-username-help"
            />
            <p
              id="checkout-username-help"
              class="text-lum-text-secondary text-sm"
            >
              3–16 letters, numbers, or underscores.
            </p>
            <input
              type="hidden"
              name="packageId"
              value={
                selectedPackage.value ? String(selectedPackage.value.id) : ''
              }
            />
            {checkout.value?.fieldErrors?.username && (
              <p role="alert" class="text-sm text-red-300">
                {checkout.value.fieldErrors.username[0]}
              </p>
            )}
            {checkout.value?.message && (
              <p role="alert" class="text-sm text-red-300">
                {checkout.value.message}
              </p>
            )}
            <button
              type="submit"
              class="lum-btn lum-grad-bg-pink-500/20 w-full disabled:opacity-50"
              disabled={checkout.isRunning}
            >
              {checkout.isRunning ? (
                <>
                  <Loader2 size={20} class="animate-spin" /> Starting checkout…
                </>
              ) : (
                <>
                  <ShoppingCart size={20} /> Continue to checkout
                </>
              )}
            </button>
          </Form>
        </div>
      </dialog>
      <p class="text-lum-text-secondary text-center text-sm">
        Payments are handled by Tebex.{' '}
        <a href={hostedStoreUrl} class="underline">
          Visit our hosted store
        </a>{' '}
        for support and store policies.
      </p>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Store',
  meta: [
    {
      name: 'description',
      content:
        'Support Luminara SMP and browse our server store. Checkout securely with Tebex.',
    },
  ],
};
