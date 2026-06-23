class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let currInd = 0; // ind for the new element to get inserted

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[currInd] = nums[i];
                currInd++;
            }
        }

        console.log(nums);
        return currInd;
    }
}
