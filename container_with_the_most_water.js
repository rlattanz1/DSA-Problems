var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let maxVol = 0;

    while (i < j) {
        const dist = j - i;
        const left = height[i];
        const right = height[j];
        const vol = dist * Math.min(left, right);
        if (maxVol < vol) maxVol = vol;
        if (left < right) {
            i++;
        } else {
            j--;
        }
    }
    return maxVol;
};
