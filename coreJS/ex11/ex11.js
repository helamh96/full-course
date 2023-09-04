function querySelectorAll(selector) {
    const [parentSelector, childrenSelector] = selector.split(' < ');

    if (!childrenSelector) {
        return document.querySelectorAll(selector);
    }

    const parents = parentSelector
        ? document.querySelectorAll(parentSelector)
        : [document];

    const children = [...parents].filter((parent) =>
        parent.querySelector(childrenSelector) !== null
    );

    return children;
}


module.exports = { querySelectorAll };
