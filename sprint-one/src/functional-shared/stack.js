var Stack = function() {
  var instance = {
    storage: {}
  };

  _.extend(instance, stackMethods);

  return instance;
  // Hey! Rewrite in the new style.subl Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },
  push: function(value) {
    this.storage[this.size()] = value;
  },
  pop: function() {
    var result = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];

    return result;
  }
};


