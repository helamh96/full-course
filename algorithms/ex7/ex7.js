function longestRunOfTwoNumbers(input) {
    const length = input.length;
    let slice = 0;
    let largestRun = input[0];
    if(largestRun===undefined){
        return null
    }
    for (let i = 1; i < length; i++) {
        let substring = input.slice(slice, i + 1)
        let numbers = new Set(substring)
        if (numbers.size < 3 && substring.length > largestRun.length) {
            largestRun = substring
        } else if (numbers.size > 2) {
            slice++
        }
    }
    return largestRun;
}

module.exports = longestRunOfTwoNumbers;