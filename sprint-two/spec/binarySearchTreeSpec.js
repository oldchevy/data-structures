describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  describe('custom tests for advanced content', function () {
    it('should execute a callback on every value in a breadth first manner', function() {
      
      var array = [];
      var func = function(value) { array.push(value.value); };

      binarySearchTree.insert(9);
      binarySearchTree.insert(2);
      binarySearchTree.insert(3);
      binarySearchTree.insert(7);
      binarySearchTree.breadthFirstLog(func);
      expect(array).to.eql([5, 2, 9, 3, 7]);
    });

    it('should have a parent property pointing to parent or null', function() {
      binarySearchTree.insert(2);
      binarySearchTree.insert(3);
      binarySearchTree.insert(7);
      expect(binarySearchTree.left.right.parent.value).to.equal(2);
      expect(binarySearchTree.parent).to.equal(null);
    });

    it('should rebalance the tree if tree max height / min height > 2', function() {
      
      var array = [];
      var func = function(value) { array.push(value.value); };

      binarySearchTree.insert(7);
      binarySearchTree.insert(4);
      binarySearchTree.insert(3);
      binarySearchTree.insert(2);
      binarySearchTree.breadthFirstLog(func);
      expect(array).to.eql([5, 4, 7, 3, 2]);

      array = [];
      //Rebalance Triggered Here
      binarySearchTree.insert(1);
      binarySearchTree.breadthFirstLog(func);
      expect(array).to.eql([4, 3, 5, 2, 7, 1]);
    });

  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog", in sorted order', function() {
    var array = [];
    var func = function(value) { array.push(value.value); };
    binarySearchTree.insert(9);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([2, 3, 5, 7, 9]);
  });
    
});
