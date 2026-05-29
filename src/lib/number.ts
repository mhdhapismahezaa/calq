export function toNumber(value: string) {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return 0;
  }

  return parsed;
}

export function roundNumber(value: number, precision = 2) {
  return Number(value.toFixed(precision));
}
