
const {recursiveFlattenArray,iterativeFlattenArray} = require("./ex9");
const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]]

test("test recursive", () => {
    let test = recursiveFlattenArray(input);
    expect(test).toEqual([1,2,3,4,5,6,7,8,9,10]);
})

test("test iterative", () => {
    let test = iterativeFlattenArray(input);
    expect(test).toEqual([1,2,3,4,5,6,7,8,9,10]);
})