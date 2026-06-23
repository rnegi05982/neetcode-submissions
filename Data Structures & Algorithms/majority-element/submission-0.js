class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const n = nums.length;
        nums.sort((a, b) => a - b);
        const mid = Math.floor(n / 2);
        return nums[mid];
    }
}
