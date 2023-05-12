
  const urlQuery = url => () => fetch(url)
  
  const handleSuccess = (result) => {
    console.log('Query succeeded:', result);
  };
  
  const handleErrorOrMaxRetryExceeded = (error) => {
    console.error('Query failed after maximum retries:', error);
  };
  
  
  const maxRetry = 3;
  const useIncrement = true;
  const delay = 1000;
  
  
  queryRetry(urlQuery('https://www.google.com'), maxRetry, delay, useIncrement)
     .then(handleSuccess)
     .catch(handleErrorOrMaxRetryExceeded);