// /* eslint linebreak-style: ["error", "windows"] */
// import LinkListNode from './linkListNode';

// export default class LinkList {
//   constructor() {
//     this.head = null;
//     // this.length();
//   }

//   prepend(value) {
//     this.head = new LinkListNode(value, this.head);
//   }

//   length() {
//     let pointer = this.head;
//     if (!pointer) {
//       return 0;
//     }
//     let len = 0;
//     while (pointer) {
//       len += 1;
//       pointer = pointer.next;
//     }
//     return len;
//   }

//   append(value) {
//     // const node = new LinkListNode(value);
//     // let pointer = this.head;
//     // if (!pointer) {
//     //   this.head = node;
//     //   return;
//     // }
//     // while (pointer.next) {
//     //   pointer = pointer.next;
//     // }
//     // pointer.next = node;

//     if (this.head === null) {
//       this.head = new LinkListNode(value);
//     } else {
//       let current = this.head;
//       while (current.next !== null) {
//         current = current.next;
//       }
//       current.next = new LinkListNode(value);
//     }
//   }

//   delete(value) {
//     if (!this.head) {
//       return;
//     }
//     if (this.head.value === value) {
//       return;
//     }
//     let previousNode = null;
//     let currentNode = this.head;
//     while (currentNode && currentNode.value !== value) {
//       previousNode = currentNode;
//       currentNode = currentNode.next;
//     }
//     if (currentNode) {
//       previousNode.next = currentNode.next;
//     }
//     // let pointer = this.head;
//     // if (!pointer) {
//     //   return;
//     // }
//     // let previousNode = null;
//     // if (this.head.value === value) {
//     //   this.head = this.head.next;
//     // }
//     // while (pointer.value !== value && pointer) {
//     //   previousNode = pointer;
//     //   pointer = pointer.next;
//     // }
//     // previousNode.next = pointer.next;
//     // pointer.node = null;
//   }

//   // traverse() {
//   //   // code here
//   // }

//   // contains(value) {
//   //   // code here
//   // }
// }
import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    this.head = new LinkListNode(value, this.head);
  }

  append(value) {
    let pointer = this.head;
    if (pointer === null) {
      this.head = new LinkListNode(value);
    } else {
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer.next = new LinkListNode(value);
    }
  }

  delete(value) {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      return;
    }
    let previousNode = null;
    let currentNode = this.head;
    while (currentNode && currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode) {
      previousNode.next = currentNode.next;
    }
  }

  traverse() {
  }

  contains(value) {
    let node = this.head;
    while (node && node.value !== value) {
      node = node.next;
    }
    if (node) {
      return true;
    }
    return false;
  }

  length() {
    let count = 0;
    let node = this.head;
    while (node !== null) {
      count += 1;
      node = node.next;
    }
    return count;
  }
}
