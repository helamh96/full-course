function checkSyntax(tree) {
    if (tree.length < 1) return true;
    if (tree.length === 1) return false;
    if (tree[0] !== '(' || tree[tree.length - 1] !== ')') return false;
    let noParenthesis = tree.slice(1, -1);
    let pieces = noParenthesis.split(',');

    if (!pieces[0]) {
        pieces = pieces.filter((p) => p);
        if (pieces.length > 1) return false;
    }

    let root = noParenthesis.split(',')[0];

    if (root.includes(')') || root.includes('(')) return false;
    return true;
}

function printTree(tree, order = 'infix') {
    let transverse = '';

    function transverseTree(tree, order) {
        let correctSyntax = checkSyntax(tree);
        if (!correctSyntax) {
            throw new SyntaxError('The tree syntax is not correct.');
        }

        tree = tree.slice(1, -1);
        if (!tree.includes('(')) {
            let elements = tree.split(',');
            if (elements.length > 3)
                throw new SyntaxError('The tree syntax is not correct.');
            let pieces = elements.filter((p) => p);

            if (pieces.length > 1)
                throw new SyntaxError('The tree syntax is not correct.');
            tree = pieces[0] || '';
        }

        let firstCommaIndex = tree.indexOf(',');
        if (firstCommaIndex < 0) {
            transverse += tree;
            return;
        }

        let root = tree.slice(0, firstCommaIndex);
        let branches = tree.slice(firstCommaIndex + 1);
        if (branches.length < 1) {
            transverse += root;
            return;
        }

        let openParentheses = 0;
        let closingParIndex;

        for (let i = 0; i < branches.length; i++) {
            if (branches[i] === ')') {
                openParentheses -= 1;
            } else if (branches[i] === '(') {
                openParentheses += 1;
            }
            if (openParentheses === 0) {
                closingParIndex = i;
                break;
            }
        }

        let branch1;
        let branch2;
        if (closingParIndex === 0) {
            [branch1, branch2] = branches.split(',');
            if (branch1 === '') {
                branch2 = branches.slice(1);
            }
        } else {
            branch1 = branches.substring(0, closingParIndex + 1);
            branch2 = branches.slice(closingParIndex + 2);
        }

        if (order === 'prefix') {
            transverse += root;
            transverseTree(branch1, order);
            transverseTree(branch2, order);
        } else if (order === 'postfix') {
            transverseTree(branch1, order);
            transverseTree(branch2, order);
            transverse += root;
        } else {
            if (branch1 !== '') transverseTree(branch1, order);
            transverse += root;
            if (branch2 !== '') transverseTree(branch2, order);
        }
    }

    tree = tree.replace(/\s/g, '');

    transverseTree(tree, order);

    if (transverse.startsWith(',') || transverse.endsWith(',')) {
        throw new SyntaxError('The tree syntax is not correct.');
    }

    transverse = transverse.replace(/,,/g, ',');
    return transverse;
}

module.exports = {printTree}