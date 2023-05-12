const queryRetry = require("./ex2")

const urlQuery = url => () => fetch(url)

const maxRetry = 3;
const useIncrement = true;
const delay = 1000;

test("test1", () => {
    expect(queryRetry(urlQuery('https://www.google.com/'), maxRetry, delay, useIncrement))
        .resolves
        .toBeTruthy();
})