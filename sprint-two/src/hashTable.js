

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // while (this._storage.get(index) ) {
  //   this._limit *= 2;
  //   var temp = this._storage;
  //   this._storage = LimitedArray(this._limit);
  //   temp.each(function(val, i) {
  //     this._storage.set(i, val);
  //   });
  //   index = getIndexBelowMaxForKey(k, this._limit);
  // }
  
  var value = { k: v};

  this._storage.set(index, value);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(entry, i, arr) {
    if (i === index) {
      arr.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


