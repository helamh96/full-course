const cancellableFetch = require('./ex3')

test.skip("it should fetch normally if not cancelled", async () => {  
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

test.skip("testPassed", ()=>{
    let result = cancellableFetch('https://www.google.com/');
    expect(result)
        .rejects
        .toEqual("DOMException{}")
    let condition = false;
    if (condition) {
        result.cancel();
    }
})