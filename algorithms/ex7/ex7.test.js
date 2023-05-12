const longestRunOfTwoNumbers = require("./ex7");

test("test1", () => {
    let test = longestRunOfTwoNumbers("1212223311212223");
    expect(test).toEqual("1121222");
})

test("test2", () => {
    let test2 = longestRunOfTwoNumbers("111");
    expect(test2).toEqual("111");
})