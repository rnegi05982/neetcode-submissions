class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const n = nums.length;
        let i = 0;
        while (i < n) {
            const j = nums[i]-1; // target index

            if (j >= 0 && j < n && nums[i]-1 !== i && nums[i] !== nums[j]) {
                // swap
                [nums[i], nums[j]] = [nums[j], nums[i]];
            } else {
                i++;
            }
        }

        for (let i = 0; i < n; i++) {
            if (nums[i]-1 !== i) return i+1;
        }

        return n+1;
    }
}
