function findIndexBalance(arr) {
    const totalSum = arr.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;
    let rightSum = totalSum;
    
    for (let i = 0; i <= arr.length; i++) {
        rightSum -= arr[i];
        leftSum += arr[i];
        if (leftSum === rightSum) {
        return i;
        }
    }
    return -1;
}

module.exports = findIndexBalance;
