const mergeArrays = require("./ex4");

test("Base case test", () => {
    const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 8];
    const largeArraySize = largeArray.length;

    mergeArrays(largeArray, smallArray);
    expect(largeArraySize === largeArray.length).toBe(true);
    expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("Same Array", () => {
    const small = [0,1,2,7]
    const large = [0,1,2,7].concat(new Array(small.length))

    mergeArrays(large, small);
    expect(large).toEqual([0,0,1,1,2,2,7,7]);
})

test('Merge arrays when both arrays are empty', () => {
    const largeArray = [];
    const smallArray = [];
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([]);
  });

test('Merge arrays when one array is empty', () => {
    const largeArray = [1, 2, 3];
    const smallArray = [];
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([1, 2, 3]);
});  