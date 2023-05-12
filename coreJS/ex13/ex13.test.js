const isSameDepth =  require("./ex13")

const nodeD = { val: 'D', children: [] };
const nodeG = { val: 'G', children: [] };
const nodeH = { val: 'H', children: [] };
const nodeI = { val: 'I', children: [] };
const nodeE = { val: 'E', children: [nodeG, nodeH] };
const nodeF = { val: 'F', children: [nodeI] };
const nodeB = { val: 'B', children: [nodeD, nodeE] };
const nodeC = { val: 'C', children: [nodeF] };
const root = { val: 'A', children: [nodeB, nodeC] };


test("test1",()=>{
    let ex1Depth = isSameDepth(root, 'D', 'E')
    expect(ex1Depth).toBe(true)
})

test("test2",()=>{
    let ex2Depth = isSameDepth(root, 'B', 'F')
    expect(ex2Depth).toBe(false)
})

const node4 = { val: 4, children: [] };
const node7 = { val: 7, children: [] };
const node8 = { val: 8, children: [] };
const node9 = { val: 9, children: [] };
const node10 = { val: 10, children: [] };
const node5 = { val: 5, children: [node7, node8] };
const node6 = { val: 6, children: [node9, node10] };
const node2 = { val: 2, children: [node4, node5] };
const node3 = { val: 3, children: [node6] };
const root2 = { val: 1, children: [node2, node3] };

test("test3",()=>{
    let ex3Depth = isSameDepth(root2, 4, 7)
    expect(ex3Depth).toBe(false)
})

test("test4",()=>{
    let ex4Depth = isSameDepth(root2, 7, 10)
    expect(ex4Depth).toBe(true)
})