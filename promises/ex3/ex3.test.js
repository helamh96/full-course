const cancellableFetch = require('./ex3')

test.skip("it should fetch normally if not cancelled", async () => {
    // fetchMock.doMock();
    // fetchMock.mockResponse(JSON.stringify({ foo: "bar" }));


    // const result = await cancellableFetch("http://example.com");
    // expect(result.status).toEqual(200);
    
    const t = async () => {
        const result = cancellableFetch("http://example.com");
    
        const someCondition = true;
    
        if (someCondition) {
          result.cancel();
        }
    
        await result;
      };
      await expect(t()).rejects.toThrow(Error);
      await expect(t()).rejects.toHaveProperty("name", "AbortError");
  });

// test('testCanceled', () => {
//     let result = cancellableFetch('https://www.google.com/');
//     expect(result)
//         .rejects
//         .toEqual({ reason: 'cancelled' })
//     let condition = true;
//     if (condition) {
//         result.cancel();
//     }
// })

// test("testPassed", ()=>{
//     let result = cancellableFetch('https://www.google.com/');
//     console.log(result)
//     expect(result)
//         .rejects
//         .toEqual("DOMException{}")
//     let condition = false;
//     if (condition) {
//         result.cancel();
//     }
// })