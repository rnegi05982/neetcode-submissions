class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = -1;
        let count = 0;

        for (let i = 0; i < nums.length; i++) {
            if (count == 0) {
                res = nums[i];
            }

            // update the count ;
            count += nums[i] == res ? +1 : -1;
        }

        return res;
    }
}
