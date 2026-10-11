import type { StorePackage } from './tebex';

export function billingSuffix(pkg: StorePackage): string {
  if (pkg.type !== 'subscription') return '';
  const period = pkg.expiry_period;
  if (period) {
    const unit = period.unit.toLowerCase().replace(/s$/, '');
    if (unit === 'month' && period.count === 3) return '/qtr';
    if (unit === 'month' && period.count === 12) return '/yr';
    const short = ({ day: 'day', week: 'wk', month: 'mo', quarter: 'qtr', year: 'yr' } as Record<string, string>)[unit];
    if (short && period.count > 0) return `/${period.count === 1 ? '' : `${period.count} `}${short}`;
  }
  // Category responses may omit expiry_period; Tebex package names include the interval.
  const interval = pkg.name.match(/\/\s*(month|mo|quarter|qtr|year|yr|week|wk|day)\b/i)?.[1]?.toLowerCase();
  return interval ? `/${({ month: 'mo', quarter: 'qtr', year: 'yr', week: 'wk' } as Record<string, string>)[interval] ?? interval}` : '';
}

export function savingsLabel(pkg: StorePackage, packages: StorePackage[]): string {
  const suffix = billingSuffix(pkg);
  const months = suffix === '/qtr' ? 3 : suffix === '/yr' ? 12 : 0;
  if (!months) return '';
  const monthly = packages.find((item) =>
    item.category.id === pkg.category.id && item.currency === pkg.currency && billingSuffix(item) === '/mo'
  );
  if (!monthly || monthly.total_price <= 0) return '';
  const baseline = monthly.total_price * months;
  const savings = Math.round((baseline - pkg.total_price) * 100) / 100;
  if (savings <= 0) return '';
  const amount = new Intl.NumberFormat('en', { style: 'currency', currency: pkg.currency }).format(savings);
  const percent = new Intl.NumberFormat('en', { maximumFractionDigits: 1 }).format(savings / baseline * 100);
  return `Save ${amount} (${percent}%) vs. ${months} monthly payments`;
}
