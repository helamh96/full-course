const cancellableFetch = require('./ex3')

test('Check', () => {
    let result = cancellableFetch('https://www.google.com/');
    expect(result)
        .rejects
        .toEqual({ reason: 'cancelled' })
    let condition = true;
    if (condition) {
        result.cancel();
    }
})