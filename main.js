import Tree from "./modules/tree.js";
const tree = new Tree([]);
console.log(tree.insert(1));
console.log(tree.insert(2));
console.log(tree.insert(3));
console.log(tree.insert(4));
console.log(tree.insert(5));
// console.log(tree.insert(10));
console.log(tree.insert(6));
console.log(tree.insert(7));
console.log(tree.insert(8));
console.log(tree.insert(9));
console.log(tree.prettyPrint(tree.root));
