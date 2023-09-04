const { isSameDepth, createTreeNode } = require('./ex13');

const root = createTreeNode(0, [
    createTreeNode(1),
    createTreeNode(2, [
        createTreeNode(1),
        createTreeNode(5, [
            createTreeNode(3),
            createTreeNode(5, [createTreeNode(6)]),
            createTreeNode(9),
        ]),
    ]),
    createTreeNode(3, [createTreeNode(0)]),
    createTreeNode(5),
    createTreeNode(7, [
        createTreeNode(3, [
            createTreeNode(3),
            createTreeNode(0, [createTreeNode(9), createTreeNode(4)]),
        ]),
    ]),
]);

const root2 = createTreeNode(3, [
    createTreeNode(1),
    createTreeNode(1),
    createTreeNode(2),
]);

describe('Tests for isSameDepth function', () => {
    test('Null tree input', () => {
        const ans = isSameDepth(null, 21, 18);
        expect(ans).toEqual(false);
    });

    test('Single node tree with different expected depth', () => {
        const tree = createTreeNode(13);
        const ans = isSameDepth(tree, 13, null);
        expect(ans).toEqual(false);
    });

    test('Nodes at the same depth with different values', () => {
        const ans = isSameDepth(root, 1, 1);
        expect(ans).toEqual(false);
    });

    test('Invalid depth types', () => {
        const ans = isSameDepth(root, 3, '3');
        expect(ans).toEqual(false);
    });

    test('Two levels with equal depth', () => {
        const tree = createTreeNode(4, [createTreeNode(2), createTreeNode(2)]);
        const ans = isSameDepth(tree, 2, 2);
        expect(ans).toEqual(true);
    });

    test('Nodes at the same depth with equal values', () => {
        const ans = isSameDepth(root, 3, 3);
        expect(ans).toEqual(true);
    });

    test('Nodes at different depths from left to right', () => {
        const ans = isSameDepth(root, 3, 5);
        expect(ans).toEqual(true);
    });

    test('Nodes at different depths from right to left', () => {
        const ans = isSameDepth(root, 5, 3);
        expect(ans).toEqual(true);
    });

    test('Multiple nodes with the same value at the same depth', () => {
        const ans = isSameDepth(root2, 1, 2);
        expect(ans).toEqual(true);
    });
});
