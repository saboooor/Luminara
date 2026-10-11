import sanitizeHtml from 'sanitize-html';

export const hostedStoreUrl = 'https://luminara.tebex.io';
const apiUrl = 'https://headless.tebex.io/api';

export interface StorePackage {
  id: number;
  name: string;
  description: string;
  image: string | null;
  total_price: number;
  currency: string;
  type: 'single' | 'subscription';
  expiry_period?: { count: number; unit: string } | null;
  category: { id: number; name: string };
}

export interface StoreCategory {
  id: number;
  name: string;
  description: string;
  image_url: string | null;
  order: number;
  packages: StorePackage[] | null;
}

export async function getCategories(token: string) {
  const response = await tebexRequest<{ data: StoreCategory[] }>(
    `/accounts/${encodeURIComponent(token)}/categories?includePackages=1`
  );
  return response.data.map((category) => ({
    ...category,
    description: sanitizeDescription(category.description),
    packages: category.packages?.map((pkg) => ({ ...pkg, description: sanitizeDescription(pkg.description) })) ?? null,
  })).sort((a, b) => a.order - b.order);
}

export interface Basket {
  ident: string;
  username: string | null;
  links: { checkout: string };
}

export async function tebexRequest<T>(path: string, body?: object): Promise<T> {
  const response = await fetch(`${apiUrl}${path}`, {
    method: body ? 'POST' : 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) throw new Error(`Tebex request failed (${response.status})`);
  return response.json() as Promise<T>;
}

export async function getPackages(token: string) {
  const response = await tebexRequest<{ data: StorePackage[] }>(
    `/accounts/${encodeURIComponent(token)}/packages`
  );
  return response.data.map((pkg) => ({ ...pkg, description: sanitizeDescription(pkg.description) }));
}

export function sanitizeDescription(html: string) {
  return sanitizeHtml(html, {
    allowedTags: ['p', 'br', 'div', 'strong', 'b', 'em', 'i', 'u', 's', 'del', 'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'pre', 'h2', 'h3', 'h4', 'hr', 'span'],
    allowedAttributes: { a: ['href', 'title'] },
    allowedSchemes: ['https', 'http', 'mailto'],
    allowProtocolRelative: false,
  });
}

export interface RecentPayment {
  username: string;
  username_id: string;
  avatar_url?: string;
  package: { name: string };
  created_at?: string | null;
  price?: number | null;
  currency?: string | null;
}

type SidebarModule =
  | { type: 'recent_payments'; data: { header: string; payments: RecentPayment[] } }
  | { type: 'featured_package'; data: { header: string; package: StorePackage } };

export async function getStoreSidebar(token: string) {
  const { data } = await tebexRequest<{ data: SidebarModule[] }>(
    `/accounts/${encodeURIComponent(token)}/sidebar`
  );
  const recent = data.find((module) => module.type === 'recent_payments');
  const featured = data.find((module) => module.type === 'featured_package');
  return {
    recent: recent?.data ?? null,
    featured: featured ? {
      ...featured.data,
      package: { ...featured.data.package, description: sanitizeDescription(featured.data.package.description) },
    } : null,
  };
}
