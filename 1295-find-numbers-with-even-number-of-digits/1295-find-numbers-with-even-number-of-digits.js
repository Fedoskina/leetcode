/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function(nums) {
  // first solution
  //     let result = 0;
  //     let digits = 0;
  //     for (let num of nums) {
  //         while(num > 0) {
  //             digits++;
  //             num = Math.floor(num / 10)
  //         }
  //         if (digits % 2 === 0) {
  //             result++
  //         }
  //         digits = 0
  //     }
      
  //     return result
      
  // second solution
      let result = 0;
      let digits = 0;
      for (const num of nums) {
        digits = num.toString().slice('').length;
          if (digits % 2 === 0) {
              result++
          }
      }
      return result;
  };