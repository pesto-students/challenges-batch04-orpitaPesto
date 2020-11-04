import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  this.next = null
  }

  prepend(value) {

    
    if(LinkList.head){
      LinkList.head.next = new LinkListNode (LinkList.head.value);;
      LinkList.head.value = value;
    } else {
      LinkList.head = new LinkListNode (value)
    }
      
    }

  append(value) {
    // code here
  }

  delete(value) {
    // code here
  }

  traverse() {
    // code here
  }

  contains(value) {
    // code here
  }

  length() {
    // code here
  }
}
