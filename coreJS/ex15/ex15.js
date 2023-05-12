function findIndexBalance(arr){
    let length = arr.length
    for(i = 1; i < length; i++){
        let leftSum = 0;
        for(j = i; j >= 0; j--){
            leftSum += arr[j];
        }
        let rightSum = 0;
        for(k = i+1; k < length; k++){
            rightSum += arr[k];
        }
        if(leftSum === rightSum){
            return i;
        }
    }
    return -1;
}

module.exports = findIndexBalance