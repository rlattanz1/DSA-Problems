var romanToInt = function(s) {
    //declare an initial value and i pointer
    let val = 0;
    let i = 0;

    // create a hash object containing key value pairs of the roman numerals and theirn numeric values
    RMhash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    // split the string s into a comma seperated array of values
    s_arr = s.split('')

    //have a while loop pick out the first/last char from split string using pop/shift

    while (i < s.length && i >= 0) {
        // shift out the first character from the s_arr
        let char = s_arr.shift(0)
        if (RMhash[char]) {
            //inner if logic to check if hash val of i is less than i + 1
            if (RMhash[char] < RMhash[s_arr[0]])
                val -= RMhash[char]
            else {
                val += RMhash[char]
            }
        }
        i += 1
    };
    return val
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
