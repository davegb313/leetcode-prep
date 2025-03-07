/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
    let isPrime = new Array(right + 1).fill(true);
    isPrime[1] = false
    for (let i = 2; i * i <= right; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= right; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let primes = [];
    for (let i = left; i <= right; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    if (primes.length < 2) {
        return [-1, -1]
    }

    let minPrimes = [];
    let minDistance = Infinity;
    for (let i = primes.length - 1; i > 0; i--) {
        if (primes[i] - primes[i - 1] <= minDistance) {
            minDistance = primes[i] - primes[i - 1]
            minPrimes[0] = primes[i - 1];
            minPrimes[1] = primes[i];
        }
    }

    return minPrimes;
};