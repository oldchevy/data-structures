var BinarySearchTree = function(value, parent) {
  var instance = {};
  instance.value = value;
  instance.left = null;
  instance.right = null;
  instance.parent = parent || null;
  instance.level = 1;
  _.extend(instance, BSTmethods);
  return instance;
};

var BSTmethods = {
  insert: function(value) {

    // var temp = this;
    // while (temp.parent) {
    //   temp = this.parent;
    // }

    var min = [];
    this.breadthFirstLog(function(node) {
      if (!node.left && !node.right) {
        min.push(node.level);
      }
    });

    //min = min.length > 0 ? min : [1];

    // var max = 0;
    var top = this;

    // this.depthFirstLog(function(node) {
    //   max = Math.max(max, this.level);
    // });

  

    var recurse = function(node) {
      if (node.value > value) {
        if (node.left) {
          recurse(node.left);
        } else {
          var result = BinarySearchTree(value, node);
          result.level = node.level + 1;
          node.left = result;
     
          if (min[0] && result.level / min[0] > 2) {
            top.rebalance();
          }
        }
      } else {
        if (node.right) {
          recurse(node.right);
        } else {
          var result = BinarySearchTree(value, node);
          result.level = node.level + 1;
          node.right = result;
        
          if (min[0] && result.level / min[0] > 2) {
            console.log('rebalancing');
            top.rebalance();
          }
        }
      }
    };

    recurse(this);


    // if (this.value > value) {
    //   if (this.left) {
    //     this.left.insert(value);
    //   } else {
    //     this.levels.push(this.levels + 1);
    //     var result = BinarySearchTree(value, this, this.levels);
    //     result.level = this.level + 1;
    //     this.left = result;
    //   }
    // //   this.left ? this.left.insert(value) : this.left = BinarySearchTree(value, this);
    // } else {
    //   if (this.right) {
    //     this.right.insert(value);
    //   } else {
    //     var result = BinarySearchTree(value, this, this.levels);
    //     result.level = this.level + 1;
    //     this.right = result;
    //   }
    // }
    
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

    

    if (this.left) {
      this.left.depthFirstLog(cb);
    }

    cb(this.value);

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
      cb(current);

      if (current.left) {
        q.enqueue(current.left);
      }

      if (current.right) {
        q.enqueue(current.right);
      }
    }
  },

  // findTop: function() {
  //   var lvlCount = 0;
  //   var node = this;
  //   while (node.parent) {
  //     count++;
  //     node = node.parent;
  //   }
  //   return lvlCount;
  // }

  rebalance: function() {
    var list = [];

    this.depthFirstLog(function(node) {
      list.push(node);
    });

    var start = Math.floor(list.length / 2);

    this.value = list[start];
    this.left = null;
    this.right = null;

    for (var i = 1; i < start; i++) {
      this.insert(list[start + i]);
      this.insert(list[start - i]);
    }

    this.insert(list[0]);
    

  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
