var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2];
    nums.sort((a, b) => a-b);
    let mid = Math.floor(nums.length / 2);
    // (nums.length % 2 !== 0) ? nums[mid] : ((nums[mid] + nums[mid - 1]) / 2.0);
    // why does ternary not work?
    if (nums.length % 2 !== 0) {
        return nums[mid];
    }  else {
        return ((nums[mid] + nums[mid - 1]) / 2.0)
    }

};
