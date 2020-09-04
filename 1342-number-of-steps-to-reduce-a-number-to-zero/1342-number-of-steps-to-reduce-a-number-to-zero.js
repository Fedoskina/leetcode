const numberOfSteps  = function(num) {
  let result = 0;
  while(num > 0) {
      if (num % 2 === 0) {
          num = num / 2;
          result ++;
      } else {
          num--;
          result ++;
      }
  }
  return result
};