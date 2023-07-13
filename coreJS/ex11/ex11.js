function querySelectorAll(selector) {
    const [parentSelector, childrenSelector] = selector.split(' < ')
    const parents = document.querySelectorAll(parentSelector) 
    const childrens = [...parents].filter((parent) =>
        Array.from(parent.querySelectorAll(childrenSelector)).some((child) => child.parentElement === parent)
    );
    return childrens
}


module.exports = {querySelectorAll}