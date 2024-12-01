export const cartesianProdict = (a, b) => {
  let res = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      res.push([a[i], b[j]]);
    }
  }

  return res;
};

export const climbStairs = (n) => {
  if (n < 2) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

export const climbStairsIterative = (n) => {
  const noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
};

export const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
  if (n === 1) {
    console.log(`Move disk 1 from rod ${fromRod} to rod ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from rod ${fromRod} to rod ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
};
