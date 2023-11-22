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
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  insert(value, root = this.root) {
    let newNode = new Node(value);
    if (!root) {
      this.root = newNode;
      return root;
    }
    if (value < root.data) {
      if (!root.left) root.left = newNode;
      else this.insert(value, root.left);
    } else {
      if (!root.right) root.right = newNode;
      else this.insert(value, root.right);
    }
    return;
  }

  delete(value, root = this.root, parent = null) {
    let temp = root;
    if (!root) return root;

    // traverse left
    if (value < root.data) {
      if (root.left) this.delete(value, root.left, root);
      // traverse right
    } else {
      if (root.right) this.delete(value, root.right, root);
    }
    // root node case
    if (!parent && root.data === value && (!root.right || !root.left)) {
      if (root.right) {
        parent = root.right;
        this.root = null;
        this.root = parent;
      } else {
        parent = root.left;
        this.root = null;
        this.root = parent;
      }
      return;
    }

    // delete leaf nodes
    if (root.data === value && !root.left && !root.right) {
      if (parent.left && parent.left.data === value) parent.left = null;
      else parent.right = null;
    }

    // delete nodes with 1 child

    if (root.right && !root.left && root.data === value) {
      // if it only has 1 right child

      if (!root.right.right) {
        root.data = root.right.data;
        if (!root.right.left) {
          root.right = null;
        } else if (root.left.right && parent.left.data === value) {
          parent.left = parent.left.right;
        }
      } else if (!parent.right && !parent.left) {
        parent.right = root.right;
        // if it has parent on the right
      } else if (parent.right) {
        if (parent.left) {
          parent.right = root.right;
        } else {
          parent.right = root.left;
        }
      }
    } else if (root.left && !root.right && !root.left.left && root.data === value) {
      if (root.left && !root.right && root.data === value) {
        // if it only has 1 left child
        if (!root.left.left) {
          if (!root.left.right && !root.right) {
            root.data = root.left.data;
            root.left = null;
          } else if (root.left.right && parent.right.data === value) {
            root.data = root.left.data;
            parent.right = parent.right.left;
          } else if (root.left.right && parent.left.data === value) {
            root.data = root.left.data;
            parent.left = root.left;
          }
          // if it has 1 left child with grandchildren
        } else if (!parent.left && !parent.right) {
          parent.left = root.left;
          // if it has parent on the left
        } else if (parent.left) {
          parent.right = root.left;
        }
      }
    } // delete nodes with two children
    else if (root.data === value && root.right && root.left) {
      if (temp.right.right) temp = temp.right;
      else {
        temp = root;
        parent = temp;
        temp = temp.right;
      }

      while (temp.left) {
        parent = temp;
        temp = temp.left;
      }

      if (temp.right && !temp.left) {
        if (!temp.right.right) {
          root.data = temp.data;
          temp.data = temp.right.data;

          temp.right = null;
        } else {
          root.data = temp.data;
          root.right = temp.right;
        }
      } else if (temp.left && !temp.right) {
        parent.data = temp.left.data;
        temp.left = null;
      } else if (!temp.right && !temp.left) {
        if (parent.right) {
          root.data = temp.data;
          if (parent.right.data === temp.data) parent.right = null;
          else if ((parent.left.data = temp.data)) parent.left = null;
        } else if (parent.left) {
          root.data = temp.data;
          if (parent.left.data === temp.data) parent.left = null;
          else if (parent.right.data === temp.data) parent.right = null;
        }
      }
    }
    return root;
  }

  find(value, root = this.root) {
    // check if the tree has a root node
    if (!root) return;
    // traverse left
    if (value < root.data) {
      if (root.left)
        if (root.data === value) return root;
        else return this.find(value, root.left);
      // traverse right
    } else {
      if (root.data === value) return root;
      else return this.find(value, root.right);
    }
  }

  levelOrder(callback, array = [], queue = [], root = this.root) {
    let temp = null;
    if (!root) return;
    if (array.length === 0) {
      queue.push(root);
      temp = queue.shift();
      if (callback) array.push(temp);
      else array.push(temp.data);
    }
    if (root.left) queue.push(root.left);

    if (root.right) queue.push(root.right);

    while (queue.length) {
      temp = queue.shift();
      if (callback) array.push(temp);
      else array.push(temp.data);
      if (temp) {
        if (temp.left) queue.push(temp.left);
        if (temp.right) queue.push(temp.right);
      }
    }
    return "Levelorder: " + array;
  }

  preOrder(callback = null, array = [], root = this.root) {
    if (!root) return;
    if (callback) array.push(root);
    else array.push(root.data);

    if (root.left) {
      this.preOrder(callback, array, root.left);
    }
    if (root.right) {
      this.preOrder(callback, array, root.right);
    }
    return "Postorder: " + array;
  }

  inOrder(callback = null, array = [], root = this.root) {
    if (!root) return;

    if (root.left) this.inOrder(callback, array, root.left);

    if (callback) array.push(root);
    else array.push(root.data);

    if (root.right) this.inOrder(callback, array, root.right);

    return "Inorder: " + array;
  }

  postOrder(callback = null, array = [], root = this.root) {
    if (!root) return;
    if (root.left) this.postOrder(callback, array, root.left);
    if (root.right) this.postOrder(callback, array, root.right);
    if (callback) array.push(root);
    else array.push(root.data);
    return "Postorder: " + array;
  }

  depth(value, root = this.root, depth = 0) {
    if (!root) return;
    if (root.data !== value) {
      if (value < root.data) return this.depth(value, root.left, depth + 1);
      else return this.depth(value, root.right, depth + 1);
    } else {
      return depth;
    }
  }
}
/// <root> <left> <right> Pre Order
// <left> <root> <right> In Order
// <left> <right> <root> Post Order
// depth 1/ 2/ 3
