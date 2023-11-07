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
  // delete(value) {
  //   let current = this.root;
  //   if (this.root === null) return;
  //   while (current) {
  //     if (value < current.data) {
  //       if (current.left.data === value) {
  //         current.left = null;
  //         return current;
  //       } else if (current.data === value && current.left.data !== null) {
  //         current.left = current;
  //         current.left = null;
  //       }
  //       current = current.left;
  //     } else {
  //       if (current.right.data == value) {
  //         current.right = null;
  //         return current;
  //       } else if (current.data === value && current.right.data !== null) {
  //         current.right = current;
  //         current.right = null;
  //       }
  //       current = current.right;
  //     }
  //   }
  // }

  delete(value) {
    let current = this.root;
    let temp;
    if (this.root === null) return;
    while (current) {
      if (value < current.data) {
        if (current.data === value && current.left.data !== null) {
          temp = current.data;
          current.data = current.left.data;
          current.left.data = temp;
          current.left = null;
        }
        current = current.left;
      } else {
        if (current.data === value && current.right !== null) {
          temp = current.data;
          current.data = current.right.data;
          current.right.data = temp;
          current.right = null;
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
