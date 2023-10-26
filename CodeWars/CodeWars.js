/* 1.- Algo Practice
* Write a function that takes an integer as input, 
* and returns the number of bits that are equal to one in the binary representation of that number. 
* You can guarantee that input is non-negative.
* 
* Example: The binary representation of 1234 is 10011010010, 
* so the function should return 5 in this case
*/
var countBits = function(n) {
    let sumResult = 0;
    let inputString = n.toString(2)
    let result = inputString.split("");
    
    result.forEach(function(value){
      sumResult += parseInt(value); 
    })
    
    return sumResult;
    
  };

  /* 2.- Algo Practice
  * Your task is to make a function that can take any non-negative integer as an argument 
  * and return it with its digits in descending order. 
  * Essentially, rearrange the digits to create the highest possible number.
  * Examples:
  * Input: 42145 Output: 54421
  */

  function descendingOrder(n){

    const myArray = n.toString().split("");
    myArray.sort();
    myArray.reverse();
    let intReverse = Number(myArray.join(''));
    return intReverse;
  }  