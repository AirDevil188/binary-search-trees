import Node from "./node.js";

export default class Tree {
  constructor(array) {
    this.root = this.buildTree([...new Set(array)].sort(this.sortArray));
  }

  sortArray(a, b) {
    return a - b;
  }

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const root = new Node(array[mid]);
    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);

    return root;
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  insert(value, root = this.root) {
    let newNode = new Node(value);
    if (root === null) {
      this.root = newNode;
      return root;
    }
    if (value < root) {
      if (root.left === null) root.left = newNode;
      else this.insert(value, root.left);
    } else {
      if (root.right === null) root.right = newNode;
      else this.insert(value, root.right);
    }
    return;
  }
  delete(value, root = this.root, prev) {
    if (root === null) return;
    if (value < root.data) {
      if (root.data === value && root.right === null && root.left === null) {
        if (prev.left !== null && prev.left.data === value) prev.left = null;
        else prev.right = null;
      } else this.delete(value, root.left, root);
    } else {
      if (root.data === value && root.right === null && root.left === null) {
        if (prev.right !== null && prev.right.data === value) prev.right = null;
        else prev.left = null;
      } else this.delete(value, root.right, root);
    }
    return;
  }
}

// Algorithm for creating balanced Binary Search Tree

// 1. Initialize start = 0, end = array.length - 1,
// 2. Initialize mid = (start + end) / 2
// 3. Create a new node, with mid as root (let's call it A)
// - Then use recursion for the following steps:

// Calculate mid of the left subarray and make it root of the left subtree of A
// Calculate mid of the right subarray and make it root of the right subtree of B

/// <root> <left> <right> Pre Order
// <left> <root> <right> In Order
// <left> <right> <root> Post Order
