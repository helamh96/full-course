//with this approach complexity is O(n) linear

function findIndexBalance(arr) {
    let i = 0;
    let j = arr.length - 1;
    let leftSum = 0;
    let rightSum = 0;
    while (i <= j) {
        if (leftSum < rightSum) {
            leftSum += arr[i];
            i++;
        } else {
            rightSum += arr[j];
            j--;
        }
    }
    if (leftSum === rightSum) {
        return j;
    }
    return -1;
}

module.exports = findIndexBalance;
