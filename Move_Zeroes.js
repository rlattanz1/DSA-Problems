var moveZeroes = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0) {
            nums.splice(i, 1);
            count++;
            i--;
        }
    }
    while (count > 0) {
        nums.push(0);
        count--;
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0,1,0,3,12,50,83,2,6,56,3453,54,4646,0,676,345,34,5,35,0,5664,45,64,25,6754,4,6,345,0]));
