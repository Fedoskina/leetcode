const mergeKLists = (lists) => {
  let result = null;
  
  const merge = (list1, list2) => {
      if (!list1 || !list2) {
          return !list1 ? list2 : list1
      }

      if (list1.val < list2.val) {
          list1.next = merge(list1.next, list2)
          return list1
      } else {
          list2.next = merge(list1, list2.next)
          return list2
      }
  }

  for (let i = 0; i < lists.length; i++) {
      result = merge(result, lists[i])
  }

  return result;
};