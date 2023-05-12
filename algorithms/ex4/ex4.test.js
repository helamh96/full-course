const mergeArrays = require("./ex4");

test("Test", () => {
    const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 8];
    const largeArraySize = largeArray.length;

    mergeArrays(largeArray, smallArray);
    expect(largeArraySize === largeArray.length).toBe(true);
    expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});