function querySelectorAll(selector) {
    const [parentSelector, childrenSelector] = selector.split(' < ');

    if (!childrenSelector) {
        return document.querySelectorAll(selector);
    }

    const parents = parentSelector
        ? document.querySelectorAll(parentSelector)
        : [document];

    const children = [...parents].filter((parent) =>
        Array.from(parent.querySelectorAll(childrenSelector)).some(
            (child) => child.parentElement === parent
        )
    );

    return children;
}

module.exports = { querySelectorAll };
