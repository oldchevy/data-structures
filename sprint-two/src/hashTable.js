

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentVal = this._storage.get(index);
  var overwrite = false;
  
  if (currentVal) {
    for (var i = 0; i < currentVal.length; i++) {
      if (currentVal[i][0] === k) {
        currentVal[i][1] = v;
        overwrite = true;
      }
    }
    this._storage.set(index, currentVal);
    
    if (!overwrite) {
      currentVal.push([k, v]);
      this._storage.set(index, currentVal);    
    } 
  } else {
    this._storage.set(index, [[k, v]]);
  }
  // var currentKey = currentVal ? Object.keys(currentVal)[0] : undefined;
  // var lim = this._limit;

  // while (currentVal && currentKey !== k) {

  //   this._limit *= 2;
  //   var result = LimitedArray(this._limit);
  //   this._storage.each(function(val) {
  //     if (val) {
  //       var key = (Object.keys(val))[0];
  //       var newIndex = getIndexBelowMaxForKey(val[key], lim);
  //       result.set(newIndex, val);
  //     }
  //   });

  //   this._storage = result;
  //   index = getIndexBelowMaxForKey(k, this._limit);
  //   currentVal = this.retrieve(k);
  //   currentKey = currentVal ? Object.keys(currentVal)[0] : undefined;
  // }
  // while (this._storage.get(index) ) {
  //   this._limit *= 2;
  //   var temp = this._storage;
  //   this._storage = LimitedArray(this._limit);
  //   temp.each(function(val, i) {
  //     this._storage.set(i, val);
  //   });
  //   index = getIndexBelowMaxForKey(k, this._limit);
  // }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(index);
  if (result) {
    for (var i = 0; i < result.length; i++) {
      if (result[i][0] === k) {
        return result[i][1];
      }
    }
  }
};  

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(entry, i, arr) {
    if (i === index) {
      arr.splice(i, 1, undefined);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


