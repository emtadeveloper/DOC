// ----------------------------------------------------------------------------

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// ----------------------------------------------------------------------------

// var plusOne = function(digits) {
//    const newNum = parseInt(digits.join(""))+1
//    const convertArray =  [...newNum.toString()]
//    return convertArray
// };

// console.log(plusOne([1,2,3]))
// console.log(plusOne([4,3,2,1]))
// console.log(plusOne([9]))
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))


// ----------------------------------------------------------------------------

console.clear()

var plusOne = function(digits) {
    let carry =0
    digits[digits.length-1] = digits[digits.length-1] + 1 
   for(let i= digits.length-1; i >= 0; i--){
      const sum = digits[i]  + carry
      if( sum < 10) {
        digits[i] = sum
        return digits
    }else{
        digits[i]=0 
        carry= 1
    }
   }
   return carry  ? [1,...digits] : digits
} 
console.log(plusOne([9,9,9,9,9]))
