function mergeArrays(largeArray, smallArray) {
    let index = 0;
    for (let i = 0; i < largeArray.length; ++i) {
        if(!largeArray[i]){
            largeArray[i] = smallArray[index++]
        }
        let j = i;
        while (j > 0 && largeArray[j - 1] > largeArray[j]) {
            [largeArray[j], largeArray[j - 1]] = [largeArray[j - 1], largeArray[j]]
            j--
        }
    }
    return largeArray;
}

module.exports = mergeArrays;