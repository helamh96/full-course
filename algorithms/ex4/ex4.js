function mergeArrays(arr1, arr2) {
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    if (i < j) {
        throw new Error();
    } else {
        let k = i - j - 1;

        while (k >= 0 && j >= 0) {
            arr1[k] > arr2[j]
                ? ((arr1[i] = arr1[k]), k--)
                : ((arr1[i] = arr2[j]), j--);
            i--;
        }
        while (k >= 0) {
            arr1[i] = arr1[k];
            k--;
            i--;
        }
        while (j >= 0) {
            arr1[i] = arr2[j];
            j--;
            i--;
        }
        return arr1;
    }
}

module.exports = mergeArrays;
