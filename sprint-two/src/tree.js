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



/*
 * Complexity: What is the time complexity of the above functions?
 */
