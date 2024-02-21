var numberOfBeams = function(bank) {
    let numLas = 0;
    let numDev = 0;
    let i = 0;

    while (i < bank.length) {
        let devArr = bank[i].split('');
        let devCount = 0;
        for (let i = 0; i < devArr.length; i++) {
            if (devArr[i] === '1') {
                devCount += 1;
            }
        }
        if (devCount === 0) {
            i++
        } else {
            numLas += devCount * numDev;
            numDev = devCount;
            devCount = 0;
            i++;
        }
    }
    return numLas;
};
