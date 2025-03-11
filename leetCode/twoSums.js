function twoSums(nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in hash) {
      return [hash[diff], i];
    }
    hash[nums[i]] = i;
  }
  return [];
}
