var reverseVowels = function(s) {
    //two pointers to track and switch the first vowels encountered from each end
    //continue using a while loop that runs until the right pointer is less than or equal to the left pointer
    //swap the first and last vowels every time they are encountered
    // return the mutated copy of the string with swapped vowels outside of the while loop
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const sArr = s.split('');
    let first = 0;
    let last = s.length - 1;

    while (first < last) {
        while (first < last && !vowels.has(sArr[first])) first++;
        while (last > first && !vowels.has(sArr[last])) last--;

        [sArr[first], sArr[last]] = [sArr[last], sArr[first]];

        first++;
        last--;
    }
    return sArr.join('');
};
