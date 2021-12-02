/**
 * dom 相关方法
 */
const getParentContainClass = (node, className) => {
  // 传入dom或者查找的class不合法
  if (!node || !className || !node.parentNode) {
    return null;
  }
  // 找到document了，结束
  const parentNode = node.parentNode;
  if (!parentNode.getAttribute) {
    return null;
  }
  const nodeClassName = parentNode.getAttribute("class");
  if (nodeClassName && nodeClassName.indexOf(className)>-1) {
    return parentNode;
  }
  return getParentContainClass(parentNode, className);
};
export default {
  getParentContainClass,
};
