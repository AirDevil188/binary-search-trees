import Tree from "./tree.js";

export default function driver() {
  // generate random array of numbers that are smaller than 100
  const randomArray = Array(100)
    .fill()
    .map(() => Math.floor(100 * Math.random()));

  // create Binary Search Tree
  const binaryTree = new Tree(randomArray);
  // print the look of Binary Search Tree
  binaryTree.prettyPrint(binaryTree.root);

  // check if the Binary Search Tree is balanced
  console.log(binaryTree.isBalanced(binaryTree.root));

  // print  level, pre, post and in order traversal of the Binary Search Tree
  console.log("Level order traversal: " + binaryTree.levelOrder());
  console.log("Pre order traversal: " + binaryTree.preOrder());
  console.log("Post order traversal: " + binaryTree.postOrder());
  console.log("In order traversal: " + binaryTree.inOrder());

  // insert NEW nodes to the Binary Search Tree in order to unbalance the tree
  binaryTree.insert(101);
  binaryTree.insert(102);
  binaryTree.insert(103);

  // check again to se if the Binary Search Tree is balanced or not
  console.log(binaryTree.isBalanced(binaryTree.root));

  // rebalance the Binary Search Tree
  binaryTree.rebalance();

  // confirm that the Binary Search tree is balanced again
  console.log(binaryTree.isBalanced(binaryTree.root));

  // run traversal methods again
  console.log("Level order traversal: " + binaryTree.levelOrder());
  console.log("Pre order traversal: " + binaryTree.preOrder());
  console.log("Post order traversal: " + binaryTree.postOrder());
  console.log("In order traversal: " + binaryTree.inOrder());

  // print the visualization of our Binary Search Tree
  binaryTree.prettyPrint(binaryTree.root);
}
