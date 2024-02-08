var lengthOfLongestSubstring = function(s) {
    const map = new Set();
    let max = 0;
    let idx = 0;
    for (let i = 0; i < s.length; i++) {
        let key = s[i];
        while (map.has(key)) {
            map.delete(s[idx]);
            idx++;
        }
        map.add(key);
        max = Math.max(max, map.size);
    }
    return max;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
