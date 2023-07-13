// function isSameDepth(root, n1, n2) {
//     const queue = [{ node: root, depth: 1 }];
//     let depthN1 = null;
//     let depthN2 = null;

//     while (queue.length) {
//       const { node, depth } = queue.shift();

//       if (node.val === n1) {
//         depthN1 = depth;
//       }
//       if (node.val === n2) {
//         depthN2 = depth;
//       }

//       if (depthN1 !== null && depthN2 !== null) {
//         break;
//       }

//       for (let child of node.children) {
//         queue.push({ node: child, depth: depth + 1 });
//       }
//     }

//     return depthN1 === depthN2
// }

function isSameDepth(root, n1, n2) {
    const queue = [{ node: root, depth: 1 }];
    let depthN1 = null;
    let depthN2 = null;
    let foundN1 = false;
    let foundN2 = false;

    while (queue.length) {
        const { node, depth } = queue.shift();

        if (node.val === n1 && !foundN1) {
            depthN1 = depth;
            foundN1 = true;
        }
        if (node.val === n2 && !foundN2) {
            depthN2 = depth;
            foundN2 = true;
        }

        if (foundN1 && foundN2) {
            break;
        }

        for (let child of node.children) {
            queue.push({ node: child, depth: depth + 1 });
        }
    }

    return depthN1 === depthN2;
}

module.exports = isSameDepth;
