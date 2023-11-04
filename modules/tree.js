import Node from "./node.js";

export default class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  sortArray(a, b) {
    return a - b;
  }

  buildTree(array, start = 0, end = array.length - 1) {
    let sortedArray = [...new Set(array)].sort(this.sortArray);

    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const root = new Node(sortedArray[mid]);
    root.left = this.buildTree(sortedArray, start, mid - 1);
    root.right = this.buildTree(sortedArray, mid + 1, end);

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
    const newNode = new Node(value);
    let current = this.root;
    if (this.root === null) {
      this.root = newNode;
      return this.root;
    }

    while (current) {
      if (value < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return newNode;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return newNode;
        }
        current = current.right;
      }
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
