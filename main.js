import Tree from "./modules/tree.js";
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// tree.levelOrder();
console.log(tree.levelOrder());
console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
// tree.delete(6345);
// tree.delete(23);
// tree.delete(7);
// tree.delete(3);
// tree.delete(67);
// tree.delete(8);
// tree.delete(1);
// tree.delete(9);
// tree.delete(324);
// tree.delete(4);
// tree.delete(5);
// tree.insert(10);
// tree.delete(10);

console.log(tree.prettyPrint(tree.root));

// console.log(treeTwo.prettyPrint(treeTwo.root));

// const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
