const { recursiveFlattenArray, iterativeFlattenArray } = require("./ex9");
const input = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]];

test("test recursive", () => {
    let test = recursiveFlattenArray(input);
    expect(test).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("test iterative", () => {
    let test = iterativeFlattenArray(input);
    expect(test).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("Using an empty array iterative", () => {
    let test = iterativeFlattenArray([]);
    expect(test).toEqual([]);
});

test("Using an empty array recursive", () => {
    let test = recursiveFlattenArray([]);
    expect(test).toEqual([]);
});

test("Flatten an input array with non-array elements recursively", () => {
    const input = [1, [2, 3], 4, "5", [6, true]];
    const result = recursiveFlattenArray(input);
    expect(result).toEqual([1, 2, 3, 4, "5", 6, true]);
});

test("Flatten an input array with non-array elements iterative", () => {
    const input = [1, [2, 3], 4, "5", [6, true]];
    const result = iterativeFlattenArray(input);
    expect(result).toEqual([1, 2, 3, 4, "5", 6, true]);
});

test("Flatten an input array with empty arrays recursively", () => {
    const input = [1, [], 2, [], 3];
    const result = recursiveFlattenArray(input);
    expect(result).toEqual([1, 2, 3]);
});

test("Flatten an input array with empty arrays iterative", () => {
    const input = [1, [], 2, [], 3];
    const result = iterativeFlattenArray(input);
    expect(result).toEqual([1, 2, 3]);
});

test("Flatten a deeply nested input array recursively", () => {
    const input = [1, [2, [3, [4, [5]]]]];
    const result = recursiveFlattenArray(input);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});

test("Flatten a deeply nested input array itetrative", () => {
    const input = [1, [2, [3, [4, [5]]]]];
    const result = iterativeFlattenArray(input);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});
