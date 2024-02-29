/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

function removeDuplicates(sortedLinkedList) {
  // TODO: implement an algorithm to remove duplicate values from a sorted linked list.
  if (sortedLinkedList.length === 0 || sortedLinkedList.length === 1) {
    return sortedLinkedList;
  }
  let temp = sortedLinkedList.head;
  while (temp.next !== null) {
    let next = temp.next;
    if (next.next === null) {
      if (temp.value === next.value) {
        temp.next = null;
        return sortedLinkedList;
      }
      temp = temp.next;
    } else {
      if (temp.value === next.value) {
        temp.next = next.next;
      } else {
        temp = temp.next;
      }
    }
  }
  return sortedLinkedList;
}

module.exports = removeDuplicates;
