function deleteRepeatingCommas(word) {
    let finalWord = word.replaceAll(',,', ',');
    let repeat = true;
    do {
        let finalWord2 = finalWord.replaceAll(',,', ',');
        if (finalWord2 == finalWord) {
            repeat = false;
        }
        finalWord = finalWord2;
    } while (repeat);
    return finalWord;
}

function isValidInput(tree) {
    let regex = new RegExp(/(,)+[A-Za-z]/,"g");
    let matches = tree.match(regex)
    if(matches!=null){
        return !Boolean(matches.length)
    }
    return true
    
}

function printTree(tree, order = 'infix') {
    tree = deleteRepeatingCommas(tree);
    let result = '';

    if(!isValidInput(tree)){
        throw new SyntaxError('The tree syntax is not correct.')
    }

    function transverseTree(tree) {
        if (!tree) {
            return;
        }
    
        if (tree === ',') {
            throw new SyntaxError('The tree syntax is not correct.');
        }
    
        if (tree.startsWith('(') && tree.endsWith(')')) {
            tree = tree.slice(1, -1); // Remove outer parentheses
        }
    
        let firstCommaIndex = tree.indexOf(',');
        if (firstCommaIndex < 0) {
            result += tree;
            return;
        }
    
        let root = tree.slice(0, firstCommaIndex);
        let branches = tree.slice(firstCommaIndex + 1);
    
        if (branches === '') {
            throw new SyntaxError('The tree syntax is not correct.');
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
    
            if (branch1 === '' || branch2 === '') {
                throw new SyntaxError('The tree syntax is not correct.');
            }
    
            branch1 = '(' + branch1 + ')';
            branch2 = '(' + branch2 + ')';
        } else {
            branch1 = branches.substring(0, closingParIndex + 1);
            branch2 = branches.slice(closingParIndex + 2);
        }
    
        if (order === 'prefix') {
            result += root;
            transverseTree(branch1);
            transverseTree(branch2);
        } else if (order === 'postfix') {
            transverseTree(branch1);
            transverseTree(branch2);
            result += root;
        } else {
            if (branch1 !== '') transverseTree(branch1);
            result += root;
            if (branch2 !== '') transverseTree(branch2);
        }
    }
    

    tree = tree.replace(/\s/g, '');
    transverseTree(tree);

    if (result.startsWith(',') || result.endsWith(',')) {
        throw new SyntaxError('The tree syntax is not correct.');
    }

    result = result.replace(/,,/g, ',');
    return result;
}

module.exports = { printTree };
