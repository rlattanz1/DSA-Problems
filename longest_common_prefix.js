var longestCommonPrefix = function(strs) {
    // let str = strs.sort((a, b) => a.length - b.length);
    let str = strs.sort();
    const word = str[0];
    const last = str[str.length - 1];
    let pre = 0;

    while (pre < word.length && pre < last.length) {
        if (last[pre] === word[pre]) {
            pre++;
        } else {
            break
        };
    }
        console.log(pre)
        return word.slice(0, pre) ;
};
