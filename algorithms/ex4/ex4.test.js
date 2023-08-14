const mergeArrays = require('./ex4');

test.skip('Base case test', () => {
    const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 8];
    const largeArraySize = largeArray.length;

    mergeArrays(largeArray, smallArray);
    expect(largeArraySize === largeArray.length).toBe(true);
    expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test.skip('Merge arrays when both arrays are empty', () => {
    const largeArray = [];
    const smallArray = [];
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([]);
});

test.skip('Merge arrays when one array is empty', () => {
    const largeArray = [1, 2, 3];
    const smallArray = [];
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([1, 2, 3]);
});

//It works with the case you mention

test.skip('Works with Ivans example', () => {
    const smallArray = [0, 1, 2, 7];
    const largeArray = [0, 1, 2, 7].concat(new Array(smallArray.length));
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([0, 0, 1, 1, 2, 2, 7, 7]);
});

test.skip('should merge two sorted arrays correctly', () => {
    const arr1 = [1, 3, 5, 0, 0, 0];
    const arr2 = [2, 4, 6];

    expect(mergeArrays(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
});

test.skip('should handle empty arrays', () => {
    const arr1 = [];
    const arr2 = [];

    expect(mergeArrays(arr1, arr2)).toEqual([]);
});

test.skip('should handle arr1 being larger than arr2', () => {
    const arr1 = [1, 3, 5, 7].concat(new Array(1));
    const arr2 = [2];
    expect(mergeArrays(arr1, arr2)).toEqual([1, 2, 3, 5, 7]);
});

test.skip('should handle arr2 being larger than arr1', () => {
    const arr1 = [1];
    const arr2 = [2, 4, 6, 8];

    expect(mergeArrays(arr1, arr2)).toEqual([1, 2, 4, 6, 8]);
});

test.skip('should handle negative numbers', () => {
    const arr1 = [-10, -5, 0, 0, 0, 0];
    const arr2 = [-8, -4, -2];

    expect(mergeArrays(arr1, arr2)).toEqual([-10, -8, -5, -4, -2, 0]);
});
