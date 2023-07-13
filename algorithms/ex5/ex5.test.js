const reverseBlocks = require('./ex5');

test('Base case', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 3;

    reverseBlocks(arr, blockSize);
    expect(arr).toEqual([2, 1, 0, 5, 4, 3, 8, 7, 6, 9]);
});

test('Reverse blocks with block size 1', () => {
    const arr = [1, 2, 3, 4, 5];
    const blockSize = 1;
    const result = reverseBlocks(arr, blockSize);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('Reverse blocks with block size larger than array size', () => {
    const arr = [1, 2, 3, 4, 5];
    const blockSize = 10;
    const result = reverseBlocks(arr, blockSize);
    expect(result).toEqual([5, 4, 3, 2, 1]);
});

test('Use block size equals zero', () => {
    const arr = [1, 2, 3, 4, 5];
    const blockSize = 0;
    expect(() => reverseBlocks(arr, blockSize)).toThrow(Error);
});
