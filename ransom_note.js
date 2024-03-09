var canConstruct = function(ransomNote, magazine) {
    const map = {};
    for (let char of magazine) {
        if (!map[char]) {
            map[char] = 0;
        }
        map[char]++;
    }
    for (let char of ransomNote) {
        if (map[char]) {
            map[char]--
        } else {
            return false;
        }
    }
    return true
};
