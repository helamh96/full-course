// function isSameDepth(tree, n1, n2) {
//     if (!tree) {
//         return false;
//     }
  
//     const queue = [tree];
//     let found1 = false;
//     let found2 = false;
//     let depth = 0;
  
//     while (queue.length) {
//         const size = queue.length;
//         depth++;
  
//         for (let i = 0; i < size; i++) {
//             const curr = queue.shift();
            
//             if (curr.val === n1) {
//             found1 = true;
//             }
    
//             if (curr.val === n2) {
//             found2 = true;
//             }
    
//             if (curr.left) {
//             queue.push(curr.left);
//             }
    
//             if (curr.right) {
//             queue.push(curr.right);
//             }
//         }
  
//         if (found1 && found2) {
//             return true
//         }
//     }
  
//     return false;
// }

function isSameDepth(root, n1, n2) {
    const queue = [{ node: root, depth: 1 }];
    let depthN1 = null;
    let depthN2 = null;
  
    while (queue.length) {
      const { node, depth } = queue.shift();
  
      if (node.val === n1) {
        depthN1 = depth;
      }
      if (node.val === n2) {
        depthN2 = depth;
      }
  
      if (depthN1 !== null && depthN2 !== null) {
        break;
      }
  
      for (let child of node.children) {
        queue.push({ node: child, depth: depth + 1 });
      }
    }
  
    return depthN1 === depthN2 
  }
  
module.exports =  isSameDepth