# binary-search-trees

Binary Search Trees for the "The Odin Project"

# features

- `buildTree(array)` builds the Binary Search tree from the given array, duplicates are being removed
- `prettyPrint(node)` prints nice visualization of our Binary Search Tree
- `insert(value)` inserts a NEW node based on the value that we pass as the argument to our method
- `delete(value)` deletes a node based on the value that we pass as the argument to our method
- `find(value)` returns the node based on the value that we pass as the argument to our method
- `levelOrder(callback)` traverses the Binary Search Tree with Level Order, callback is optional if we pass callback to our method, our method will return NODES as objects. If no callback is being provided we are going to get only the values of our nodes from our method.
- `preOrder(callback)` traverses the Binary Search Tree with Pre Order, callback is optional if we pass callback to our method, our method will return NODES as objects. If no callback is being provided we are going to get only the values of our nodes from our method.
- `inOrder(callback)` traverses the Binary Search Tree with In Order, callback is optional if we pass callback to our method, our method will return NODES as objects. If no callback is being provided we are going to get only the values of our nodes from our method.
- `postOrder(callback)` traverses the Binary Search Tree with Post Order, callback is optional if we pass callback to our method, our method will return NODES as objects. If no callback is being provided we are going to get only the values of our nodes from our method.
- `depth(value)` returns the depth of the NODE based on value that we pass as an argument to our method.
- `height(root)` returns the height of the Binary Search Tree
- `isBalanced()` returns true if the Binary Search Tree is balanced, else, it returns false
- `rebalance(callback)` Rebalances the Binary Search Tree

We also, have simple driver script for our BST that ties everything together:

- `Creates a Binary Search Tree from an array of random numbers < 100`
- `Prints our Binary Search Tree with the help of prettyPrint() method`
- `Confirms if the Binary Search Tree is balanced`
- `Prints out the element in level, pre, post and in order`
- `Unbalances the Binary Search Tree by adding several numbers > 100`
- `Confirms that the Binary Search Tree is unbalanced by calling isBalanced() method`
- `Again, it prints out all elements in level, pre, post, and in order`
- `Prints our Binary Search Tree with the help of the prettyPrint() method`
