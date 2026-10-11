import type { RequestHandler } from '@qwik.dev/router';
import { getPackages, tebexRequest, type Basket } from '~/lib/tebex';

export const onGet: RequestHandler = async ({ env, cookie, redirect }) => {
  const token = env.get('TEBEX_HEADLESS_TOKEN')?.trim();
  const pending = cookie
    .get('tebex-checkout')
    ?.json<{ basket: string; packageId: string; type: string }>();
  if (!token || !pending) throw redirect(303, '/store');
  let checkoutUrl: string;
  try {
    const path = `/accounts/${encodeURIComponent(token)}/baskets/${encodeURIComponent(pending.basket)}`;
    const { data: basket } = await tebexRequest<{ data: Basket }>(path);
    if (!basket.username) throw new Error('Basket is not authorized');
    const packages = await getPackages(token);
    const pkg = packages.find((item) => String(item.id) === pending.packageId);
    if (!pkg) throw new Error('Package is no longer available');
    await tebexRequest(
      `/baskets/${encodeURIComponent(pending.basket)}/packages`,
      {
        package_id: pending.packageId,
        quantity: 1,
        type: pkg.type,
      }
    );
    const { data: updated } = await tebexRequest<{ data: Basket }>(path);
    const checkout = new URL(updated.links.checkout);
    if (
      checkout.protocol !== 'https:' ||
      !checkout.hostname.endsWith('.tebex.io')
    )
      throw new Error('Invalid checkout URL');
    checkoutUrl = checkout.href;
  } catch {
    throw redirect(303, '/store?checkout=error');
  }
  cookie.delete('tebex-checkout', { path: '/store' });
  throw redirect(303, checkoutUrl);
};
