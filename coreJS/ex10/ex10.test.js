const { printTree } = require('./ex10_2');

test('basic test', () => {
    let tree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,(J))))';
    let expectedPrefix = 'ABDECFHIGJ';
    let prefixResult = printTree(tree, 'prefix');
    expect(prefixResult).toEqual(expectedPrefix);

    // Test infix order
    let expectedInfix = 'DBEAHFICJG';
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
    }).toThrowError(/The tree syntax is not correct/);
});

test('accept all valid inputs', () => {
    let tree1 = '(A,)';
    let tree2 = '(A,,)';
    let tree3 = '(A,,(B))';
    let res1 = printTree(tree1);
    let res2 = printTree(tree2);
    let res3 = printTree(tree3);
    console.log(res3);
    expect([res1, res2, res3]).toEqual(['A', 'A', 'AB']);
});

test('works with valid inputs', () => {
    let tree = '(A,,(B))';
    let expected = 'AB';
    let result = printTree(tree, 'infix');
    expect(result).toEqual(expected);
});

test('works with valid inputs - Postfix order', () => {
    let tree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,(J))))';
    let expectedPostfix = 'DEBHIFJGCA';
    let postfixResult = printTree(tree, 'postfix');
    expect(postfixResult).toEqual(expectedPostfix);
});

test('works with valid inputs - Infix order', () => {
    let tree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,(J))))';
    let expectedInfix = 'DBEAHFICJG';
    let infixResult = printTree(tree, 'infix');
    expect(infixResult).toEqual(expectedInfix);
});

test('works with valid inputs - Postfix order (Single Node)', () => {
    let tree = '(A)';
    let expectedPostfix = 'A';
    let postfixResult = printTree(tree, 'postfix');
    expect(postfixResult).toEqual(expectedPostfix);
});

test('works with valid inputs - Infix order (Single Node)', () => {
    let tree = '(A)';
    let expectedInfix = 'A';
    let infixResult = printTree(tree, 'infix');
    expect(infixResult).toEqual(expectedInfix);
});

test('works with valid inputs - Postfix order (Empty Tree)', () => {
    let tree = '()';
    let expectedEmpty = '';
    let emptyResult = printTree(tree, 'postfix');
    expect(emptyResult).toEqual(expectedEmpty);
});

test('works with valid inputs - Infix order (Empty Tree)', () => {
    let tree = '()';
    let expectedEmpty = '';
    let emptyResult = printTree(tree, 'infix');
    expect(emptyResult).toEqual(expectedEmpty);
});
