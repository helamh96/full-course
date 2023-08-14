const cancellableFetch = require('./ex3');
const fetch = require("node-fetch");

jest.mock("node-fetch");

afterEach(() => {
    jest.restoreAllMocks();
});

test('should succeed and return response when fetch succeeds', async () => {
    const url = 'https://example.com';
    const response = await cancellableFetch(url);
    expect(response.status).toEqual(200);
});

test('should cancel the request when cancel method is called', async () => {
    const url = 'https://example.com';
    const mockResponse = {
        status: 200,
        json: async () => ({ message: 'Success' }),
    };
    fetch.mockResolvedValue(mockResponse);

    const cancellablePromise = cancellableFetch(url);

    expect(cancellablePromise.cancel).toBeDefined();
    cancellablePromise.cancel(); 

    await expect(cancellablePromise).rejects.toThrow('This operation was aborted');
});

test.skip('it should fetch normally if not cancelled', async () => {
    const t = async () => {
        const result = cancellableFetch('http://example.com');

        const someCondition = true;

        if (someCondition) {
            result.cancel();
        }

        await result;
    };
    await expect(t()).rejects.toThrow(Error);
    await expect(t()).rejects.toHaveProperty('name', 'AbortError');
});

test.skip('testPassed', () => {
    let result = cancellableFetch('https://www.google.com/');
    expect(result).rejects.toEqual('DOMException{}');
    let condition = false;
    if (condition) {
        result.cancel();
    }
});
