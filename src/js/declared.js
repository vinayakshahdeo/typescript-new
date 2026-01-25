// export function add(a, b) {
//   return a + b;
// }

export function add(a, b) {
  if ((typeof a === 'string') | (typeof b === 'string')) {
    return a.toString() + b.toString();
  }
  return a + b;
}
