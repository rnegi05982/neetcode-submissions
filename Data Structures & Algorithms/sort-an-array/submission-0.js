class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
    
    this.mergeSort(nums,0,nums.length-1)
    return nums
    }

    mergeSort(arr, startInd, endInd) {
        // base case
        if (startInd >= endInd) return;

        const mid = Math.floor((startInd + endInd) / 2);

        this.mergeSort(arr, startInd, mid);
        this.mergeSort(arr, mid + 1, endInd);

        // merge both the left and the right arrays
        this.merge(arr, startInd, mid, endInd);
    }

    merge(arr, startInd, mid, endInd) {
        //left arr : [startInd , mid ]
        // right arr : [mid+1 , endInd]
        const n = endInd - startInd + 1;
        const tempArr = new Array(n);

        let lptr = startInd;
        let rptr = mid + 1;
        let tempptr = 0;
        while (lptr <= mid && rptr <= endInd) {
            tempArr[tempptr++] = arr[lptr] <= arr[rptr] ? arr[lptr++] : arr[rptr++];
        }
        //leftover : either left will be half processed or the right one but not both
        while (lptr <= mid) tempArr[tempptr++] = arr[lptr++];

        while (rptr <= endInd) tempArr[tempptr++] = arr[rptr++];

        // copying back the sorted value back to the original array
        tempptr = 0;
        for (let i = startInd; i <= endInd; i++) {
            arr[i] = tempArr[tempptr++];
        }
    }
}
