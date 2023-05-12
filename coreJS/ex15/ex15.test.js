const findIndexBalance = require("./ex15")

test("test1", () => {
    const arr = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13]
    let test = findIndexBalance(arr);
    expect(test).toEqual(6);
})