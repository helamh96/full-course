function reverseBlocks(arr, blockSize) {
    if (blockSize < 1) {
        throw new Error("Block size must be greater than 0")
    }
    let arrSize = arr.length;
    for (let i = 0; i < arrSize; i += blockSize) {
        let currentSize = Math.min(blockSize, arr.length - i)
        for (let j = 0; j < currentSize / 2; j++) {
            [arr[i + j], arr[i + currentSize - j - 1]] = [arr[i + currentSize - j - 1], arr[i + j]];
        }
    }
    return arr
}

module.exports = reverseBlocks;