import Node from "./node.js";

class LinkedList {
  constructor(head) {
    this.head = new Node(1);
  }

  displayHead() {
    for (let [key, value] of Object.entries(this.head)) {
      console.log(`${key}: ${value}`);
    }
  }
}

const list = new LinkedList();
console.log(list.head.nextNode);
