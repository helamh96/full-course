const findIndexBalance = require('./ex15');

test('Basic Test', () => {
    expect(findIndexBalance([1, 2, 3, 4, 9, 9, 2, 7, 10, 13])).toEqual(6);
});

test('Other Basic tests', () => {
    expect(findIndexBalance([1, 1, 1, 1, 1, 1, 1, 1])).toEqual(3);
    expect(findIndexBalance([1, 1, 1, 1, 1, 1, 2])).toEqual(3);
});

test('Works For Arrays with no balanced index', () => {
    expect(findIndexBalance([1, 2, 3, 4, 5])).toEqual(-1);
    expect(findIndexBalance([1, 1, 1, 1, 1])).toEqual(-1);
});

test('Works with empty Arrays', () => {
    expect(findIndexBalance([])).toEqual(-1);
});

test('Works with Arrays of just one Element', () => {
    expect(findIndexBalance([1])).toEqual(-1);
});