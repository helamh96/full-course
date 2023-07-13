//with this approach complexity is O(n) linear

function findIndexBalance(arr) {
    const totalSum = arr.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const rightSum = totalSum - leftSum;
        if (leftSum === rightSum) {
            return i - 1;
        }
        leftSum += arr[i];
    }

    return -1;
}

module.exports = findIndexBalance;
