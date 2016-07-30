var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var stringified = JSON.stringify(item);
  this._storage[stringified] = undefined;
};

setPrototype.contains = function(item) {
  var stringified = JSON.stringify(item);
  return stringified in this._storage;
};

setPrototype.remove = function(item) {
  var stringified = JSON.stringify(item);
  delete this._storage[stringified];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
