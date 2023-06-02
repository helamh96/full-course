const longestRunOfTwoNumbers = require("./ex7");

test("Base Test", () => {
    let test = longestRunOfTwoNumbers("1212223311212223");
    expect(test).toEqual("1121222");
})

test("Input is a small run of same number", () => {
    let test2 = longestRunOfTwoNumbers("111");
    expect(test2).toEqual("111");
})

test('Longest run with an empty input string', () => {
    const input = '';
    const result = longestRunOfTwoNumbers(input);
    expect(result).toEqual(null);
});
  
test('Longest run with an input string containing only one number', () => {
    const input = '5';
    const result = longestRunOfTwoNumbers(input);
    expect(result).toEqual('5');
});
  
test('Longest run with only one number in the input string', () => {
    const input = '12345';
    const result = longestRunOfTwoNumbers(input);
    expect(result).toEqual('12');
});

test('Longest run with multiple runs of the same length in the input string', () => {
    const input = '112233';
    const result = longestRunOfTwoNumbers(input);
    expect(result).toEqual('1122');
});
  