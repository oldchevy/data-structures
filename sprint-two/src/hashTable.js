 

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tuple = 0;
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
      this._tuple++;
    } 
  } else {
    this._storage.set(index, [[k, v]]);
    this._tuple++;
  }

  if (this._tuple / this._limit >= 0.75) {
    this.resize(2);
  }
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
  var hash = this;
  this._storage.each(function(bucket, i) {
    if (i === index) {
      for (var j = 0; j < bucket.length; j++) {
        if (bucket[j][0] === k) {
          bucket.splice(j, 1);
          hash._tuple--;
        }
      }
    }
  });

  if (this._tuple / this._limit < 0.25) {
    this.resize(0.5);
  }
};


HashTable.prototype.resize = function(n) {

  this._limit = Math.ceil(this._limit * n);
  this._tuple = 0;

  var temp = this._storage;
  var hash = this;
  this._storage = LimitedArray(this._limit);

  temp.each(function(bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        hash.insert(tuple[0], tuple[1]);
      }
    }
  });

};
/*
 * Complexity: What is the time complexity of the above functions?
 */


