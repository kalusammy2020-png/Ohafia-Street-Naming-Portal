import { COMMUNITIES } from '../constants';
import { toDateString } from './format';

const FALLBACK_CODE = 'OHF';

// Builds the next serial number for a community, e.g. OH-EBM-2026-002.
// It looks at the highest serial already used, so numbers never repeat.
export function generateUIN(communityName, existingStreets) {
  const year = new Date().getFullYear();
  const code = COMMUNITIES.find((c) => c.name === communityName)?.code ?? FALLBACK_CODE;

  const highestSerial = existingStreets
    .filter((s) => s.uin.startsWith(`OH-${code}-`))
    .map((s) => Number(s.uin.split('-').pop()))
    .reduce((max, n) => Math.max(max, n), 0);

  return `OH-${code}-${year}-${String(highestSerial + 1).padStart(3, '0')}`;
}

export function generateReceiptNo() {
  const year = new Date().getFullYear();
  return `REC-OHF-${year}-${Math.floor(1000 + Math.random() * 9000)}`;
}

// Registration today, renewal exactly one year later.
export function getRegistrationDates() {
  const today = new Date();
  const nextYear = new Date(today);
  nextYear.setFullYear(today.getFullYear() + 1);
  return {
    registrationDate: toDateString(today),
    renewalDate: toDateString(nextYear),
  };
}