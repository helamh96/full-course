const isSymmetric = require('./ex12');

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

test('symmetric tree', () => {
    const root1 = new TreeNode(
        1,
        new TreeNode(2, new TreeNode(3), new TreeNode(4)),
        new TreeNode(2, new TreeNode(4), new TreeNode(3))
    );
    let isSymmetricTree = isSymmetric(root1);
    expect(isSymmetricTree).toBe(true);
});

test('non symmetric tree', () => {
    const root2 = new TreeNode(
        1,
        new TreeNode(2, new TreeNode(3), new TreeNode(4)),
        new TreeNode(2, new TreeNode(4))
    );
    let isSymmetricTree = isSymmetric(root2);
    expect(isSymmetricTree).toBe(false);
});

test('Check symmetry of an empty tree', () => {
    const root = null;
    const result = isSymmetric(root);
    expect(result).toBe(true);
});

test('Check symmetry of a tree with a single node', () => {
    const root = new TreeNode(1);
    const result = isSymmetric(root);
    expect(result).toBe(true);
});

test('Check symmetry of a tree with a single branch', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    const result = isSymmetric(root);
    expect(result).toBe(false);
});
