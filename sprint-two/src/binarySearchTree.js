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

    //This call is linear. Is there any way we can break the operation when it finds the first min?
    var min = [];
    this.breadthFirstLog(function(node) {
      if (!node.left && !node.right) {
        min.push(node.level);
      }
    });
  
    //Binding 'this' value to top level works in recursion. That makes sense and is cool!
    var recurse = (function(node) {
      
      //Again passing along 'this' through binding for the logic function
      var logic = (function(LorR) {
        if (node[LorR]) {
          recurse(node[LorR]);
        } else {
          var result = BinarySearchTree(value, node);
          result.level = node.level + 1;
          node[LorR] = result;
     
          if (min[0] && result.level / min[0] > 2) {
            this.rebalance();
          }
        }
      }).bind(this);


      if (node.value > value) {
        logic('left');
      } else {
        logic('right');
      }
    }).bind(this);

    //Begin recursion
    recurse(this);
    
  },
  contains: function(value) {


    if (this.value === value) {
      return true;
    } else {
      if (this.value > value) {
        //First part makes sure node exists, then casts it as a boolean for proper return
        return !!this.left && this.left.contains(value);
      } else {
        return !!this.right && this.right.contains(value);
      }
    }

  },
  depthFirstLog: function(cb) {

    //This order guarantees nodes will be visited in sorted order
    if (this.left) {
      this.left.depthFirstLog(cb);
    }

    cb(this);

    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  },

  breadthFirstLog: function(cb) {
    
    var q = new Queue();
    var current;

    q.enqueue(this);

    //Visit each node in the queue, and add each of it's children to the queue
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

  rebalance: function() {

    var list = [];

    //Returns all values in sorted order
    this.depthFirstLog(function(node) {
      list.push(node.value);
    });

    var start = Math.floor(list.length / 2);

    //Detaching head of tree and reassigning it's value
    this.value = list[start];
    this.left = null;
    this.right = null;

    //Resorting
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
