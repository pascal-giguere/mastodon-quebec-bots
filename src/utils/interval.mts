export function startInterval(callback: () => void, ms: number): void {
  callback();
  setInterval(callback, ms);
}
