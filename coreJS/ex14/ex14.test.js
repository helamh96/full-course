const maxRectangle = require('./ex14');

test('Base test', () => {
    const matrix1 = [
        [1, 0, 1, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0],
    ];
    const maxArea = maxRectangle(matrix1);
    expect(maxArea).toEqual(6);
});

test('Find max rectangle area in an empty matrix', () => {
    const matrix = [];
    const result = maxRectangle(matrix);
    expect(result).toBe(0);
});

test('Find max rectangle area in a matrix with all zeros', () => {
    const matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    const result = maxRectangle(matrix);
    expect(result).toBe(0);
});

test('Find max rectangle area in a matrix with all ones', () => {
    const matrix = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];
    const result = maxRectangle(matrix);
    expect(result).toBe(9);
});

test('Find max rectangle area in a matrix with irregular heights', () => {
    const matrix = [
        [1, 0, 1],
        [1, 1, 0],
        [1, 1, 1],
    ];
    const result = maxRectangle(matrix);
    expect(result).toBe(4);
});

test('Find max rectangle area in a large matrix', () => {
    const matrix = [
        [1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
    ];
    const result = maxRectangle(matrix);
    expect(result).toBe(6);
});
