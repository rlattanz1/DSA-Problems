var longestPalindrome = function(s) {

    var expand = function(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right)
    }


    if (s.length === 1) return s;
    let sub = "";

    for (let i = 0; i < s.length; i++) {
        let odd = expand(i, i);
        let even = expand(i, i+1);

        if (odd.length > sub.length) sub = odd;
        if (even.length > sub.length) sub = even;
    }
    return sub;
}

console.log(longestPalindrome("baaaad"));
console.log(longestPalindrome("baabad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("babad"));
