const isSymmetric = require("./ex12")

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

test("test1", () => {
    const root1 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)))
    isSymmetricTree = isSymmetric(root1)
    expect(isSymmetricTree).toBe(true);
})

test("test2", () => {
    const root2 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4)))
    isSymmetricTree = isSymmetric(root2)
    expect(isSymmetricTree).toBe(false);
})