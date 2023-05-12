const queryRetry = async (asyncFn, maxRetry, delay, useIncrement) => {
    let retryCount = 0;
    let retryDelay = delay;
  
    while (retryCount <= maxRetry) {
      try {
        const result = await asyncFn();
        return result;
      } catch (error) {
        retryCount++;
  
        if (retryCount > maxRetry) {
          throw error;
        }
  
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
  
        if (useIncrement) {
          retryDelay *= 2;
        }
      }
    }
  };
  
module.exports = queryRetry;