var mergeAlternately = function(word1, word2) {
    const max = Math.max(word1.length, word2.length)
    let res = '';

    for (let i = 0; i < max; i++) {
        res += (word1[i] || "");
        res += (word2[i] || "");
    };
    return res;
};
