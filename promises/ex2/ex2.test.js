const queryRetry = require('./ex2');

jest.setTimeout(10000);

const urlQuery = (url) => async () => await fetch(url);

const maxRetry = 3;
const useIncrement = true;
const delay = 1000;

test.skip('Succeed at first Call', () => {
    expect(
        queryRetry(
            urlQuery('https://www.google.com/'),
            maxRetry,
            delay,
            useIncrement
        )
    ).resolves.toBeTruthy();
});

const successOnSecondCall = () => {
    let numberOfCall = 0;

    return () => {
        numberOfCall++;

        return new Promise((res, rej) =>
            setTimeout(numberOfCall > 1 ? res : rej, 1000, 'success')
        );
    };
};

test.skip('Succeed at second call', async () => {
    let query = successOnSecondCall();

    const response = await queryRetry(query, maxRetry, delay, useIncrement);
    expect(response).toEqual('success');
});

const successOnThirdCall = () => {
    let numberOfCall = 0;

    return () => {
        numberOfCall++;

        return new Promise((res, rej) =>
            setTimeout(numberOfCall > 2 ? res : rej, 1000, 'success')
        );
    };
};

test.skip('Succeed at third call', async () => {
    let query = successOnThirdCall();

    const response = await queryRetry(query, maxRetry, delay, useIncrement);
    expect(response).toEqual('success');
});

test.skip('Failure', async () => {
    let res;
    await queryRetry(
        urlQuery('http://www.mynonexistancewebpage.com/'),
        maxRetry,
        delay,
        useIncrement
    ).catch((err) => (res = err.message));
    expect(res).toEqual('fetch failed');
});


const successfulAsyncFn = async () => 'Success';
const failingAsyncFn = async () => {
    throw new Error('Failed');
};

describe('queryRetry', () => {
    test('should succeed if the request succeeds on the first try', async () => {
        const result = await queryRetry(successfulAsyncFn, 3, 1000, false);
        expect(result).toEqual('Success');
    });

    test('should throw an error if the request fails on all retries', async () => {
        await expect(
            queryRetry(failingAsyncFn, 3, 1000, false)
        ).rejects.toThrow('Failed');
    });

    test('should succeed if the request fails a few times but eventually succeeds', async () => {
        let retryCount = 0;
        const asyncFnWithRetry = async () => {
            retryCount++;
            if (retryCount <= 2) {
                throw new Error('Failed');
            }
            return 'Success';
        };

        const result = await queryRetry(asyncFnWithRetry, 3, 1000, false);
        expect(result).toEqual('Success');
    });

    test('should execute in approximately the expected time', async () => {
        const maxRetry = 5;
        const delay = 500;
        const executionTimeStart = new Date();

        await queryRetry(successfulAsyncFn, maxRetry, delay);

        const executionTimeEnd = new Date();
        const executionTime = executionTimeEnd - executionTimeStart;
        const expectedExecutionTime = maxRetry * delay;

        expect(executionTime).toBeLessThanOrEqual(expectedExecutionTime + 100); // Add 100ms tolerance
    });
});
