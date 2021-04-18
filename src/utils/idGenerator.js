/**
 * Generate unique id
 * @returns {string}
 */
export function idGenerator() {
  return `${Math.random()
    .toString(36)
    .substr(2, 9)}`;
}