module.exports = function multiply(first, second) {
  let a = BigInt(BigInt(first) * BigInt(second)).toString();
  return a;
}
