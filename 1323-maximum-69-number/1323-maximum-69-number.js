/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number  = function(num) {
  const arr = num.toString().split('')
  let end = false;
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] === '6') {
          arr.splice(i, 1, 9)
          end = true
      }
      
      if (end || i === arr.length - 1) {
          return arr.join('')
      }
  }
};