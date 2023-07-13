const getCycleStartNode = require('./ex16');
const { LinkedList } = require('./createLinked');

test('Returns null for an empty linked list', () => {
    const list = new LinkedList();

    const cycleStartNode = getCycleStartNode(list.head);

    expect(cycleStartNode).toBeNull();
});

test('Returns null when there is no cycle in the linked list', () => {
    const list = new LinkedList();

    list.addNode(5);
    list.addNode(10);
    list.addNode(15);
    list.addNode(20);

    const cycleStartNode = getCycleStartNode(list.head);

    expect(cycleStartNode).toBeNull();
});

test('Returns the correct node where the cycle starts in the linked list', () => {
    const list = new LinkedList();

    list.addNode(5);
    list.addNode(10);
    list.addNode(15);
    list.addNode(20);
    list.head.next.next.next.next = list.head.next;

    const cycleStartNode = getCycleStartNode(list.head);

    expect(cycleStartNode.data).toBe(10);
});

test('Returns the same node as the cycle start in a single-node linked list', () => {
    const list = new LinkedList();

    list.addNode(5);
    list.head.next = list.head;

    const cycleStartNode = getCycleStartNode(list.head);

    expect(cycleStartNode.data).toBe(5);
});

test('Returns the correct node where the cycle starts in a two-node linked list', () => {
    const list = new LinkedList();

    list.addNode(5);
    list.addNode(10);
    list.head.next.next = list.head;

    const cycleStartNode = getCycleStartNode(list.head);

    expect(cycleStartNode.data).toBe(5);
});
