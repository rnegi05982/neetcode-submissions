class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        const char = new Uint32Array(26);

        for (let i = 0; i < s.length; i++) {
            char[s[i].charCodeAt() - 97]++;
            char[t[i].charCodeAt() - 97]--;
        }

        // after the loop all the char should be 0

        // if not then there is a diff in char freq
        for (let i = 0; i < 26; i++) {
            if (char[i] !== 0) return false;
        }

        return true;
    }
}
