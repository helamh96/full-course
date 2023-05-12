const reverseBlocks = require("./ex5")

test("Test", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 3;

    reverseBlocks(arr, blockSize);
    expect(arr).toEqual([
        2, 1, 0, 5, 4,
        3, 8, 7, 6, 9
    ]);
})