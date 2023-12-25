const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  rootNode;

  root() {
    if (!this.rootNode) {
      return null;
    }
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addInto(this.rootNode, data)

    function addInto(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addInto(node.left, data);
      } else {
        node.right = addInto(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchInside (this.rootNode, data);

    function searchInside (node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchInside(node.left, data);
      } else {
        return searchInside(node.right, data);
      }
    }
  }

  find(data) {
    if (this.rootNode === null) {
      return false;
    }
    let node = this.rootNode;
    let found = false;
    while (node && !found) {
      if ( data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      } else {
        found = node;
      }
    }

    return found ? found : null;
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode (node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode (node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null; // delete node
        }

        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};