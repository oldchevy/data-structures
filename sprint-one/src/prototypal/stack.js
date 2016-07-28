var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = Object.create(stackMethods);

  return instance;
};

stackMethods = {
  count: 0,
  storage: {}
};

stackMethods.size = function() {

  return this.count;

};

stackMethods.push = function(val) {

  this.storage[this.count] = val;
  this.count++;

};

stackMethods.pop = function() {

  this.count = Math.max(0, this.count - 1);
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;


};