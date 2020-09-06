/**
 * @param {number} n
 * @return {number}
 */
 
const subtractProductAndSum = function(n) {
    const arr = []
    let sum = 0;
    let product = 1;
    let num = n;
    
    while(num > 0) {
        arr.push(num % 10)
        num = Math.floor(num / 10)
    }
    
    for (const number of arr) {
        sum += number;
        product *= number;
    }
    
    return product - sum;
};
