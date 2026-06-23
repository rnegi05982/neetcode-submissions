class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const arr = nums.map((num, ind) => {
            return { num, ind };
        });

        arr.sort((a, b) => a.num - b.num);

        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            console.log(right);

            const sum = arr[left].num + arr[right].num;
            if (sum == target) {
                const leftInd = arr[left].ind;
                const rightInd = arr[right].ind;
                return leftInd < rightInd ? [leftInd, rightInd] : [rightInd, leftInd];
            }

            if (sum < target) {
                // sum must be increased
                left++;
            } else {
                right--;
            }
        }

        return [];
    }
}
