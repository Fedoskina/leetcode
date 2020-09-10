/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
const arraysIntersection = function(arr1, arr2, arr3) {
  const arr4 = arr1.filter(element => arr2.includes(element))
  return arr3.filter(element => arr4.includes(element))
};