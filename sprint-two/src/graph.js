

// Instantiate a new graph
var Graph = function() {


  var instance = Object.create(Graph.prototype);
  instance.nodes = {};
  return instance;

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this.nodes;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.nodes[fromNode], toNode) &&
         _.contains(this.nodes[toNode], fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  if (this.hasEdge(fromNode, toNode)) {
    var index = _.indexOf(this.nodes[fromNode], toNode);
    this.nodes[fromNode].splice(index, 1);

    index = _.indexOf(this.nodes[toNode], fromNode);
    this.nodes[toNode].splice(index, 1);

  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var value in this.nodes) {
    cb(+value);
    //Must cast keys to numbers in order pass tests
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


