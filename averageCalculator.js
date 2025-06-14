export function calculateAverage(items, key) {
  const total = items.reduce((sum, item) => sum + item[key], 0);
  return total / items.length;
}
