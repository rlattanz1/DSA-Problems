var twoSum = function(nums, target) {
    // let numsArr = nums.sort((a, b) => a - b);
    let res = [];
    let hash = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (hash.has((target - nums[i]))) {
            // res.push([hash.get(target - nums[i]), i]) *if multiple answers
            return [hash.get(target - nums[i]), i];
        }
        hash.set(nums[i], i);
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
