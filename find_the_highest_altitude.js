var largestAltitude = function(gain) {

    let alt = 0;
    let maxAlt = 0;

    for (let num of gain) {
        alt = num + alt;
        maxAlt = Math.max(maxAlt, alt);
    }
    return maxAlt;
};
