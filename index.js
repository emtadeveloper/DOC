var multiply = function(num1, num2) {
   const number1 = +num1;
   const number2 = +num2;
   let news =  BigInt(number1 * number2);
   let eeee = 0;
   eeee = BigInt(number1 * number2) - BigInt(Number.MAX_SAFE_INTEGER)
   return eeee
};

console.log(multiply("123456789","987654321"))
    