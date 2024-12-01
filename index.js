import {
  cartesianProdict,
  climbStairs,
  climbStairsIterative,
  towerOfHanoi,
} from "./misc.js";
import { bubbleSort, insertionSort, mergeSort, quickSort } from "./sorting.js";
const arr = [8, 20, -2, 4, -6];
console.log("bubble sort", bubbleSort(arr));
console.log("insertionSort", insertionSort(arr));
console.log("quicksort", quickSort(arr));
console.log("mergesort", mergeSort(arr));

console.log("cartesian product", cartesianProdict([1, 2], [3, 4]));
console.log("cartesian product", cartesianProdict([1, 2], [3, 4, 5]));
console.log("climb stairs", climbStairs(5));
console.log("climb stairs", climbStairs(4));
console.log("climb stairs", climbStairs(3));

console.log("climb stairs iterative", climbStairsIterative(5));
console.log("climb stairs iterative", climbStairsIterative(4));
console.log("climb stairs iterative", climbStairsIterative(3));

console.log("tower of hanoi", towerOfHanoi(4, "A", "B", "C"));
