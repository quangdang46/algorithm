function findMinCoins(coins, change) {
  let numCoins = 0;
  let coinIdx = coins.length - 1;
  while (change > 0 && coinIdx >= 0) {
    if (coins[coinIdx] <= change) {
      change -= coins[coinIdx];
      numCoins++;
    } else {
      coinIdx--;
    }
  }
  return numCoins;
}

console.log(findMinCoins([1, 5, 10, 25], 36)); // 3