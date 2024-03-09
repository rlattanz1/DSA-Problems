var threeSum = function(nums) {
    res = [];
    let numsArr = nums.sort((a, b) => a - b);

    for (let i=0; i < numsArr.length - 2; i++) {

        let n = numsArr[i];
        let l = i+1;
        let r = numsArr.length - 1;
        if (i > 0 && nums[i] === nums[i - 1]){
            continue
        }
        while (l < r) {
            let threeSum = n + numsArr[l] + numsArr[r]
            if (threeSum < 0) {
                l += 1;
            } else if (threeSum > 0) {
                r -= 1;
            } else {
                res.push([n, numsArr[l], numsArr[r]]);
                while (nums[l] === nums[l+1] && l < r) {
                    l++;
                }
                l += 1;
            };
        };
    };
    return res
};
