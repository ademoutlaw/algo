function search(arr:number []) :number{
    let zeroIndex = -1;
    let bestZeroIndex = -1;
    let count = 0;
    let bestCount = -1;
    let onesCount = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element == 0) {
            index
            if (zeroIndex < 0) {
                zeroIndex = index;
                count = onesCount;
                continue;
            }
            count += onesCount;
            if (count >= bestCount) {
                bestCount = count;
                bestZeroIndex = zeroIndex;
                bestZeroIndex
                bestCount
            }
            count = onesCount;
            zeroIndex = index;
            onesCount = 0;
        } else {
            onesCount++;
        }

    }
    count += onesCount;
    if (count >= bestCount) {
        bestCount = count;
        bestZeroIndex = zeroIndex;
    }
    return bestZeroIndex;
}

let a = search([0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0])
// a
// a = search([1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1])
// a
