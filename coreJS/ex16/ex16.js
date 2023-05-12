function hasCycle(head) {
    let set = new Set()
    let current = head   
    while(current){
        if(set.has(current.data)){
            return current.data
        }else{
            set.add(current.data)
        }
        current = current.next
    }
    return false
}

module.exports = hasCycle