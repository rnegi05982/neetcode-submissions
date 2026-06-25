class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
 // nums only contains : 0 1 2
  const count = { 0: 0, 1: 0, 2: 0 };

  for (const num of nums) {
    if (num == 0) count[0]++;
    if (num == 1) count[1]++;
    if (num == 2) count[2]++;
  }

  // sort 0 first
  for (let i = 0; i < count[0]; i++) {
    nums[i] = 0;
  }

  // sort 1 next
  for (let i = count[0]; i < count[1] + count[0]; i++) {
    nums[i] = 1;
  }
  // sort 2 next
  for (let i = count[0] + count[1]; i < count[0] + count[1] + count[2]; i++) {
    nums[i] = 2;
  }

    }
}
