import Node from "./node.js";

class LinkedList {
  nodes = [];

  constructor() {
    this.head = new Node();
    this.nodes.push(this.head);
  }

  append(value) {
    const newNode = new Node(value, null);
    const lastNode = this.nodes[this.nodes.length - 1];
    lastNode.nextNode = newNode;
  }

  displayHead() {
    console.log(this.head);
  }
}

const list = new LinkedList();
list.append("cat");
list.displayHead();
