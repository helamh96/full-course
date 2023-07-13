const { printTree } = require('./ex10');

test('basic test', () => {
    let tree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
    let expectedPrefix = 'ABDECFHIGJ';
    let prefixResult = printTree(tree, 'prefix');
    expect(prefixResult).toEqual(expectedPrefix);

    // Test infix order
    let expectedInfix = 'DBEAHFICGJ';
    let infixResult = printTree(tree, 'infix');
    expect(infixResult).toEqual(expectedInfix);

    // Test postfix order
    let expectedPostfix = 'DEBHIFJGCA';
    let postfixResult = printTree(tree, 'postfix');
    expect(postfixResult).toEqual(expectedPostfix);
});

test('works for a single node tree', () => {
    expect(printTree('(A)')).toBe('A');
});

test('works with empty three', () => {
    let tree = '()';
    let expectedEmpty = '';
    let emptyResult = printTree(tree, 'infix');
    expect(emptyResult).toEqual(expectedEmpty);
});

test('Test a tree with invalid syntax', () => {
    let tree = '(A,,,(B,,),)';
    expect(() => {
        printTree(tree, 'infix');
        console.log(printTree(tree, 'infix'))
    }).toThrow(SyntaxError('The tree syntax is not correct.'));
});

