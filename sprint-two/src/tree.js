var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;

};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
  
  //newTree.children = [];  // fix me
};

treeMethods.contains = function(target) {

  var bool = false;

  if (this.value === target) {
    return true;
  }

  _.each(this.children, function(child) {

    if (child.contains(target)) {
      bool = true;
    }
  });

  return bool;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
