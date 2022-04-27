//Should add number and numberTwo together, return it, then multiplies the sum by the number the user types. 
const number = 7
const numberTwo = 6

const add = function(n1, n2){
  return(n1 + n2);
};
const mult = function (n1, n2){
  return(n1 * n2);
};

const sum = add(number, numberTwo);
const finalSum = mult(prompt("Enter Number here") ,sum);
console.log(finalSum);


