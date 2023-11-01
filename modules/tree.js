export default class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  sort(a, b) {
    return a - b;
  }

  buildTree(array) {
    let sortedArray = [...new Set(array)].sort(this.sort);
    return sortedArray;
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
}

/// <root> <left> <right> Pre Order
// <left> <root> <right> In Order
// <left> <right> <root> Post Order
