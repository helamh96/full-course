function isPrime(n) {
    if (n <= 1 || Math.floor(n)!==n) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
}

module.exports = {isPrime}