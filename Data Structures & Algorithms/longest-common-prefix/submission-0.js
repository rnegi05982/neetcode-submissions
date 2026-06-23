class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let i = 0;
        let breakWhile = false;
        while (true) {
            // check if the ith char is present in all the string and same
            // if not break
            let ithChar = null;
            for (let j = 0; j < strs.length; j++) {
                if (i >= strs[j].length) {
                    breakWhile = true;
                    break;
                }
                if (!ithChar) {
                    ithChar = strs[j][i];
                }

                if (strs[j][i] !== ithChar) {
                    breakWhile = true;
                    break;
                }
            }
            if (breakWhile) break;
            i++;
        }

        return strs[0].slice(0, i);
    }
}
