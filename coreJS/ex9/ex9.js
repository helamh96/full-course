function recursiveFlattenArray(input) {
    let finalArr = []
    for (const e of input) {
        if (!Array.isArray(e)) {
            finalArr.push(e)
        }else{
            finalArr = finalArr.concat(recursiveFlattenArray(e))
        }
    }
    return finalArr
}
  
function iterativeFlattenArray(input) {
    const finalArr = []
    const queue = []
    for (let i = input.length - 1; i >= 0; i--) {
        queue.push(input[i])
    }
    do{
        const e = queue.pop()
        if (!Array.isArray(e)) {
            finalArr.push(e);
        }else{
            for (let i = e.length - 1; i >= 0; i--) {
                queue.push(e[i])
            }
        }
    }while(queue.length > 0)
    return finalArr;
}

module.exports = {recursiveFlattenArray, iterativeFlattenArray}