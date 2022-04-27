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

//Different code

const bill = function(products, tax){
  let total = 0;
  for(i = 0; i < products.length; i++){
  total += products[i] + products[i] * tax;
}
    return total;
};

console.log(bill([12, 8, 4], 0.2));

//Different
let people = ['Hi', 'hello', 'welcome', 'good morning']
people.forEach((person, index) => {
  console.log(index, person);
});

