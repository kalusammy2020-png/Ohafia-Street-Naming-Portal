// Small display helpers.

export const formatNaira = (amount) => `₦${Number(amount).toLocaleString()}`;

// "2026-11-11" from a Date object
export const toDateString = (date) => date.toISOString().split('T')[0];