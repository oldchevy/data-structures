var BinarySearchTree = function(value) {
  var instance = {};
  instance.value = value;
  instance.left = null;
  instance.right = null;
  _.extend(instance, BSTmethods);
  return instance;
};

var BSTmethods = {
  insert: function(value) {

    if (this.value > value) {
      this.left ? this.left.insert(value) : this.left = BinarySearchTree(value);
    } else {
      this.right ? this.right.insert(value) : this.right = BinarySearchTree(value);
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
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
