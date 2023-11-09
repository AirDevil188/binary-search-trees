import Tree from "./modules/tree.js";
const tree = new Tree([10, 5, 15, 2, 17, 1, 3]);
console.log(tree.prettyPrint(tree.root));
console.log(tree.delete(17));
console.log(tree.delete(10));
console.log(tree.delete(3));
console.log(tree.delete(1));
// tree.insert(1);
// tree.insert(7);
// tree.insert(4);
// tree.insert(23);
// tree.insert(8);
// tree.insert(9);
// tree.insert(4);
// tree.insert(3);
// tree.insert(5);
// tree.insert(7);

console.log(tree.prettyPrint(tree.root));
// console.log(treeTwo.prettyPrint(treeTwo.root));

// const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
