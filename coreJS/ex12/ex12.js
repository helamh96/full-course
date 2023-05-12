function isSymmetric(root) {
    if (!root) {
        return true;
    }

    function isMirror(p, q) {
        if (!p && !q) {
            return true
        }
        if (!p || !q) {
            return false
        }
        return p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left)
    }

    return isMirror(root.left, root.right)
}
  
module.exports = isSymmetric