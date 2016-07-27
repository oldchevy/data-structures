var Queue = function() {

  var instance = {
    count: 0,
    storage: {}
  };


  _.extend(instance, queueMethods);

  return instance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {

  size: function() {
    return this.count;
  },

  enqueue: function(value) {
    var count = this.count;
    var storage = this.storage;
    for (var i = count; count > 0; count--) {
      storage[i] = storage[i - 1];
    }

    storage[0] = value;
    this.count++;

  },

  dequeue: function() {

    this.count = Math.max(0, this.count - 1);
    var result = this.storage[this.count];
    delete this.storage[this.count];

    return result;

  }

};


