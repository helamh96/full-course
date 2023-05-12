class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
class LinkedList {
constructor() {
    this.head = null;
}

addNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
    this.head = newNode;
    } else {
    let currentNode = this.head;

    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    }
}

printList() {
    let currentNode = this.head;
    const values = [];

    while (currentNode) {
    values.push(currentNode.data);
    currentNode = currentNode.next;
    }

    console.log(values.join(" -> "));
}
}
  
const list = new LinkedList();

list.addNode(5);
list.addNode(10);
list.addNode(15);
list.addNode(20);
list.addNode(15);

list.printList();
