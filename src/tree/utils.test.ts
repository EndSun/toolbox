import { createbBinaryTreeNode, binaryTreeCreator } from './utils';

describe('createbBinaryTreeNode', () => {
  it('should return binary tree node correctly', () => {
    const node = createbBinaryTreeNode(1, null, null);
    expect(node.value).toBe(1);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });
  it('should return binary tree node correctly with only left leaf ', () => {
    const left = createbBinaryTreeNode(2, null, null);
    const node = createbBinaryTreeNode(1, left, null);
    expect(node.value).toBe(1);
    expect(node.left).toBe(left);
    expect(node.right).toBe(null);
  });

  it('should return binary tree node correctly with leaf nodes', () => {
    const left = createbBinaryTreeNode(2, null, null);
    const right = createbBinaryTreeNode(3, null, null);
    const node = createbBinaryTreeNode(1, left, right);
    expect(node.value).toBe(1);
    expect(node.left).toBe(left);
    expect(node.right).toBe(right);
  });
});

describe('binaryTreeCreator', () => {
  it('should create binary tree correctly', () => {
    const root = binaryTreeCreator([1]);
    expect(root.value).toBe(1);
    expect(root.left).toBe(null);
    expect(root.right).toBe(null);
  });
  it('should throw Error when is empty array', () => {
    expect(() => {
      binaryTreeCreator([]);
    }).toThrowError();
  });

  it('should throw Error when root is null', () => {
    expect(() => {
      binaryTreeCreator([null]);
    }).toThrowError();
  });
  it('should return full binary tree correctly', () => {
    const root = binaryTreeCreator([1, 2, 3, 4, 5, 6, 7]);
    expect(root.value).toBe(1);
    expect(root.left?.value).toBe(2);
    expect(root.right?.value).toBe(3);
    expect(root.left?.left?.value).toBe(4);
    expect(root.left?.right?.value).toBe(5);
    expect(root.right?.left?.value).toBe(6);
    expect(root.right?.right?.value).toBe(7);
  });

  it('should return partial binary tree correctly', () => {
    const root = binaryTreeCreator([1, null, 3, null, null, 6, 7]);
    expect(root.value).toBe(1);
    expect(root.left).toBe(null);
    expect(root.right?.value).toBe(3);
    expect(root.right?.left?.value).toBe(6);
    expect(root.right?.right?.value).toBe(7);
  });

  it('should return partial binary tree correctly with wrong array', () => {
    const root = binaryTreeCreator([1, null, 3, 4, 5, 6, 7]);
    expect(root.value).toBe(1);
    expect(root.left).toBe(null);
    expect(root.right?.value).toBe(3);
    expect(root.right?.left?.value).toBe(6);
    expect(root.right?.right?.value).toBe(7);
  });
});
