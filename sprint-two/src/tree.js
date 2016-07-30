var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || null;
  newTree.children = [];  

  _.extend(newTree, treeMethods);

  return newTree;

};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value, this));
  
  //newTree.children = [];  // fix me
};

treeMethods.contains = function(target) {

  var bool = false;

  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  // _.each(this.children, function(child) {

  //   if (child.contains(target)) {
  //     bool = true;
  //   }
  // });
  return false;
  //return bool;
};

treeMethods.removeFromParent = function() {
  var target = this;
  var parent = this.parent.children;
  for (var i = 0; i < parent.length; i++) {
    if (parent[i].value === target.value) {
      parent.splice(i, 1);
    }
  }

  this.parent = null;

};

treeMethods.traverse = function(cb) {

  cb(this.value);

  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
