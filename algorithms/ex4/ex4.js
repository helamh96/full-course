function mergeArrays(largeArray, smallArray) {
    let largeIndex = largeArray.length - smallArray.length - 1;
    let smallIndex = smallArray.length - 1;
    let mergedIndex = largeArray.length - 1;
    while (smallIndex >= 0) {
      if (largeIndex >= 0 && largeArray[largeIndex] > smallArray[smallIndex]) {
        largeArray[mergedIndex] = largeArray[largeIndex];
        largeIndex--;
      } else {
        largeArray[mergedIndex] = smallArray[smallIndex];
        smallIndex--;
      }
      mergedIndex--;
    }
}
  

module.exports = mergeArrays;