
// turn x into a string
// have a revstr var set at an empty str
// iterate backwards through the str and add each char to revstr
// check if str is equal to revstr

// for no string conversion solution
// have a reverse integer variable starting at 0
// have a while loop that will run until the original integer is 0
// use mod to get the last integer
// reassign the integer to be the the number/10 and rounded down
// add the number to the reverse int var
// multiply that var by ten to add the next num to the end of the var
// return the reverse int === original int

var isPalindrome = function(x) {
    let revInt = 0;
    let origInt = x;
    while (x > 0) {
        let num = x % 10;
        x = Math.floor(x/10);
        revInt *= 10;
        revInt += num;
    }
    // ternary logic
    const pal = revInt === origInt ? true : false;
    return pal
    // if else logic
    // if (revInt === origInt) {
    //     return true;
    // } else {
    //     return false;
    // };
};
