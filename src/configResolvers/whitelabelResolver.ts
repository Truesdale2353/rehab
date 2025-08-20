import academy from '../configs/academy';
import defaultConfig from '../configs/defaultConfig';
import rehabConfig from '../configs/rehab';


const rules = [
  { match: (h: string) => h === 'acmehealth.com' || h.endsWith('.acmehealth.com'), config: rehabConfig },
  { match: (h: string) => h === 'thalesacademy.bg' || h.endsWith('.thalesacademy.bg'), config: academy }
];

export function getConfig(loc: any) {
  const l = loc || window.location;
  const host = (l.hostname || '').toLowerCase();
  for (const r of rules) if (r.match(host)) return r.config;
  return defaultConfig;
}

export default getConfig;
