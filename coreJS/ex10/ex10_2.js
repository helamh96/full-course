class Node {
    constructor(element) {
        this.left = null;
        this.right = null;
        this.data = element;
    }
}

function parseTree(stringT) {
    if (stringT === '') return null;
    let index = -1;

    function getValue() {
        let value = '';
        while (stringT[index] !== ')' && stringT[index] !== ',') {
            if (stringT[index] === '(') {
                throw new Error(`The tree syntax is not correct`);
            }
            if (stringT[index] === undefined || stringT[index] === ' ') {
                throw new Error(`The tree syntax is not correct`);
            }
            value += stringT[index];
            index++;
        }
        return value;
    }

    function createNode() {
        index++;
        let root;

        if (stringT[index] === ')' || stringT[index] === ',') {
            return null;
        } else if (stringT[index] === '(') {
            index++;
            root = new Node(getValue());
        } else {
            throw new Error(`The tree syntax is not correct`);
        }

        if (stringT[index] === ')') {
            index++;
            return root;
        }

        root.left = createNode();

        if (stringT[index] === ')') {
            index++;
            return root;
        } else if (stringT[index] !== ',') {
            throw new Error(`The tree syntax is not correct`);
        }

        root.right = createNode();
        if (stringT[index] !== ')') {
            throw new Error(`The tree syntax is not correct`);
        }

        index++;
        return root;
    }

    const tree = createNode();

    if (stringT[index] !== undefined) {
        throw new Error('The tree syntax is not correct');
    }
    return tree;
}

function printTree(tree, order = 'infix') {
    const parsedTree = parseTree(tree);
    let str = '';

    function printPostorder(node) {
        if (node == null || node.data.trim() === '') return;

        printPostorder(node.left);
        printPostorder(node.right);
        str += node.data;
    }

    function printInorder(node) {
        if (node == null || node.data.trim() === '') return;
        printInorder(node.left);
        str += node.data;
        printInorder(node.right);
    }

    function printPreorder(node) {
        if (node == null || node.data.trim() === '') return;

        str += node.data;
        printPreorder(node.left);
        printPreorder(node.right);
    }

    if (order === 'infix') {
        printInorder(parsedTree);
    } else if (order === 'postfix') {
        printPostorder(parsedTree);
    } else if (order === 'prefix') {
        printPreorder(parsedTree);
    }
    return str;
}

module.exports = { printTree };
