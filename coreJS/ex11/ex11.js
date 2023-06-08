function querySelectorAll(selector) {
    const [parentSelector, childrenSelector] = selector.split('<')
    const parents = document.querySelectorAll(parentSelector)
    const childrens = [...parents].filter((p) => p.querySelectorAll(`:scope > ${childrenSelector}`).length)
    console.log(childrens)
    return childrens
}


module.exports = querySelectorAll