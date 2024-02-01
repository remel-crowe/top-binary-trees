function linkedList() {
  let head = null;
  let tail = null;
  let length = 0;

  function append(value) {
    let node = head;
    if (!node) {
      head = createNode(value);
      tail = head;
      length += 1;
      return;
    } else {
      while (node.next) {
        node = node.next;
      }
      node.next = createNode(value);
      tail = node.next;
      length += 1;
      return;
    }
  }

  function prepend(value) {
    let nodeToAdd = createNode(value, head);
    head = nodeToAdd;
    length += 1;
  }

  function getSize() {
    return length;
  }

  function getHead() {
    if (head) {
      return head;
    }
    console.log("No current nodes");
  }

  function getTail() {
    if (tail) {
      return tail;
    }
    console.log("No current nodes");
  }

  function at(index) {
    let currentNode = head;
    let i = 1;

    if (index === 1) {
      return currentNode;
    } else if (index > length) {
      console.log("Index Out Of Bounds, returning last element");
      return tail;
    } else {
      while (i !== index && currentNode.next) {
        currentNode = currentNode.next;
        i += 1;
      }
      return currentNode;
    }
  }

  function pop() {
    if (length > 0) {
      let node = head;
      while (node.next) {
        if (!node.next.next) {
          length -= 1;
          return ([tail, node.next] = [node.next, null]);
        } else {
          node = node.next;
        }
      }
    }
  }

  function find(value) {
    let currentNode = head;
    let counter = 0;

    while (currentNode.next) {
      if (currentNode.value !== value) {
        currentNode = currentNode.next;
        counter += 1;
      } else {
        return counter;
      }
    }
    return null, "Not In List";
  }

  function contains(value) {
    let currentNode = head;
    while (currentNode.next) {
      if (currentNode.value !== value) {
        currentNode = currentNode.next;
      } else {
        return true;
      }
    }
    return false;
  }

  function toString() {
    let currentNode = head;
    let output = [];
    if (currentNode) {
      for (let i = 0; i <= length - 1; i++) {
        output.push(`(${currentNode.value})`);
        currentNode = currentNode.next;
      }
    }
    return output.join(" - ");
  }

  return { append, prepend, pop, getSize, at, find, contains, toString };
}

const createNode = (value = null, next = null) => {
  return { value, next };
};

const list1 = linkedList();

list1.append(12);
list1.append(13);
list1.append(11);
list1.append(23);
list1.prepend("bunny");
console.log(list1.find("bunny"));
console.log(list1.contains(19));
console.log(list1.toString());
