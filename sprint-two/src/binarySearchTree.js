var BinarySearchTree = function(value, parent) {
  var instance = {};
  instance.value = value;
  instance.left = null;
  instance.right = null;
  instance.parent = parent || null;
  _.extend(instance, BSTmethods);
  return instance;
};

var BSTmethods = {
  insert: function(value) {

    if (this.value > value) {
      this.left ? this.left.insert(value) : this.left = BinarySearchTree(value, this);
    } else {
      this.right ? this.right.insert(value) : this.right = BinarySearchTree(value, this);
    }

  },
  contains: function(value) {


    if (this.value === value) {
      return true;
    } else {
      if (this.value > value) {
        return !!this.left && this.left.contains(value);
      } else {
        return !!this.right && this.right.contains(value);
      }
    }

  },
  depthFirstLog: function(cb) {

    cb(this.value);

    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  },
  breadthFirstLog: function(cb) {
    
    var q = new Queue();
    var current;

    q.enqueue(this);

    while (q.size() > 0) {

      current = q.dequeue();
      cb(current.value);

      if (current.left) {
        q.enqueue(current.left);
      }

      if (current.right) {
        q.enqueue(current.right);
      }
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
