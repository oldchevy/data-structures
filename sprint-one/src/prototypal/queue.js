var Queue = function() {

  var instance = Object.create(queueMethods);
  return instance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  storage: {},
  count: 0
};

queueMethods.size = function() {
  return this.count;
};

queueMethods.enqueue = function(val) {
  this.storage[this.count] = val;
  this.count++;
};

queueMethods.dequeue = function() {
  var result = this.storage[0];
  delete this.storage[0];
  for (var i = 0; i < this.count; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  this.count = Math.max(0, this.count - 1);
  return result;
};

