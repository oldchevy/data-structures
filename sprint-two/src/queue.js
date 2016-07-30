var Queue = function() {
  this.count = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.count;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.count] = val;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var result = this.storage[0];
  delete this.storage[0];
  for (var i = 0; i < this.count; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  this.count = Math.max(0, this.count - 1);
  return result;
};

var makeQueues = function(n) {
  var hello = [];
    for (var i = 0; i < n; i++) {
      var queue = new Queue();
      hello.push(queue);
    }
};
      
makeQueues(10000000);

