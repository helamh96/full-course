const maxRectangle = require("./ex14")

test("test1", () => {
    const matrix1 = [
        [1,0,1,0,0],
        [1,0,1,1,1],
        [1,1,1,1,1],
        [1,0,0,1,0]
    ]
    const maxArea = maxRectangle(matrix1)
    expect(maxArea).toEqual(6)
})

test("test2", () => {
    const matrix2 = [
        [0,1,1,0,1],
        [1,1,0,1,0],
        [0,1,1,1,0],
        [1,1,1,1,0],
        [1,1,1,1,1],
        [0,0,0,0,0]
    ]
    const maxArea = maxRectangle(matrix2)
    expect(maxArea).toEqual(9)
})