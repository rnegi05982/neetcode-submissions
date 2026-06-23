class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        for (let i = 0; i < strs.length; i++) {
            const arr = new Uint32Array(26);
            for (let j = 0; j < strs[i].length; j++) {
                arr[strs[i][j].charCodeAt() - 97]++;
            }

            const key = arr.join(" ");
            console.log(strs[i], " ", key);

            if (!res[key]) {
                res[key] = [];
            }

            res[key].push(strs[i]);
        }

        // console.log(res);
        return Object.values(res);
    }
}
