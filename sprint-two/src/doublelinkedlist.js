var DoubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var temp = Node(value);
    temp.prev = list.tail;

    if (list.tail) {
      list.tail.next = temp;

    }
    if (!list.head) {
      list.head = temp;
    }

    list.tail = temp;
  };

  list.addToHead = function(value) {
    var temp = Node(value);
    temp.next = list.head;

    if (list.head) {
      list.head.prev = temp;
    }
    if (!list.tail) {
      list.tail = temp;
    }

    list.head = temp;
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.removeTail = function() {
    var temp = list.tail.value;
    list.tail = list.tail.prev;
    return temp;
  };


  list.contains = function(target) {
    
    var workingNode = list.head;
    while (workingNode !== null) {

      if ( workingNode.value === target) {
        return true;
      }
      workingNode = workingNode.next;

    }
    return false;
    
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */