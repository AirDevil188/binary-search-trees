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

  insert(value) {
    let current = this.root;
    const newNode = new Node(value);
    if (this.root === null) return new Node(value);

    while (current.data > value) {
      if (current.left !== null) {
        current = current.left;
      } else {
        current.left = newNode;
        return newNode;
      }
    }
    while (current.data < value) {
      if (current.right !== null) current = current.right;
      current.right = newNode;
      return newNode;
    }
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
