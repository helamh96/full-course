const queryRetry = require("./ex2")

jest.setTimeout(10000)

const urlQuery = url => async() => await fetch(url)

const maxRetry = 3;
const useIncrement = true;
const delay = 1000;

test.skip("Succeed at first Call", () => {
    expect(queryRetry(urlQuery('https://www.google.com/'), maxRetry, delay, useIncrement))
        .resolves
        .toBeTruthy();
})

const successOnSecondCall = () => {
    let numberOfCall = 0;

    return () => {
        numberOfCall++;

        return new Promise((res, rej) => setTimeout(numberOfCall > 1 ? res : rej, 1000, 'success'));
    }
};

test.skip("Succeed at second call", async() => {
    let query = successOnSecondCall()

    const response = await queryRetry(query, maxRetry, delay, useIncrement)
    expect(response).toEqual("success")
})

const successOnThirdCall = () => {
    let numberOfCall = 0;

    return () => {
        numberOfCall++;

        return new Promise((res, rej) => setTimeout(numberOfCall > 2 ? res : rej, 1000, 'success'));
    }
};

test.skip("Succeed at third call", async() => {
    let query = successOnThirdCall()

    const response = await queryRetry(query, maxRetry, delay, useIncrement)
    expect(response).toEqual("success")
})

test.skip("Failure", async() =>{
    let res 
    await queryRetry(urlQuery("http://www.mynonexistancewebpage.com/"), maxRetry, delay, useIncrement).catch(err =>  res = err.message)
    expect(res).toEqual("fetch failed")
})

test("verify time", async()=> {
    const now = new Date().getTime()
    let executionTime
    try {
        await queryRetry(urlQuery("http://www.mynonexistancewebpage.com/"), maxRetry, delay, useIncrement)
    } catch (error) {
        executionTime = new Date().getTime()
    }
    expect(executionTime-now).toBeGreaterThan(2000)
})