/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
    const MOD = 1e9 + 7;
    const dp = Array(Math.max(4, n + 1)).fill(0);
    dp[0] = 1, dp[1] = 2, dp[2] = 5;
    if (n <= 3) return dp[n - 1];

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] * 2 + (dp[i - 3] || 1)) % MOD;
    }

    return dp[n - 1];
};