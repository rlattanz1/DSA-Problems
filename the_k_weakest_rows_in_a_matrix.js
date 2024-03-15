var kWeakestRows = function(mat, k) {
    let rowArr = mat.map((row, i) => [row.reduce((a,b) => a + b, 0), i]);
    rowArr.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]); // need help understanding the sorting method better
    return rowArr.slice(0, k).map(([sol, i]) => i);
};
