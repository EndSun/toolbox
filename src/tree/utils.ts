import { BinaryTreeNode } from './types';

export const createbBinaryTreeNode = (
  value: number | null,
  left: BinaryTreeNode | null,
  right: BinaryTreeNode | null
): BinaryTreeNode => {
  return {
    value,
    left,
    right,
  };
};

export const binaryTreeCreator = (
  array: Array<number | null>
): BinaryTreeNode => {
  if (!array.length) {
    throw new Error('array is not be empty');
  }
  if (array[0] === null) {
    throw new Error('root node should not null');
  }
  const root = createbBinaryTreeNode(array[0], null, null);
  const nodes = [root];
  const len = array.length;
  for (let i = 0; i < array.length; i++) {
    let node;
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    if (!nodes[i]) continue;
    if (left < len && array[left] !== null) {
      node = createbBinaryTreeNode(array[left], null, null);
      nodes[left] = node;
      nodes[i].left = node;
    }
    if (right < len && array[right] !== null) {
      node = createbBinaryTreeNode(array[right], null, null);
      nodes[right] = node;
      nodes[i].right = node;
    }
  }
  return root;
};

// export const binaryTreePrinter = (
//   node: BinaryTreeNode
// ): Array<number | null> => {};
