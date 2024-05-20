// Comparision operator return Boolean value (true or false).


let a = 5;
let b = 10;
console.log(a < b); // true. 5 is less than 10.
console.log(a > b); // false 5 is greater than 10.
console.log(a <= b); // true. 5 is less than equals to 10.
console.log(a >= b); // false 5 is greater than equals to 10.

// in javascript we use (!) symbol for NOT 

console.log(a != b); // 5 is NOT equals to b.
console.log(a == b); // it check the values are equals or not.
console.log(a === b); // it check value and type of value is same.

// difference between ==  and ===
// == double equals to compare values and return boolean Exp.

let x = 2;
let y = "2";

console.log(x == y); // it will return true because values are same.

//but === triple equals compare values and aslo there type and return boolean Exp.

let i = 10;
let j = "10";
let k = "10"

console.log(i === j); // false values same but type is different.
console.log(j === k); // true values and also the type of values are same. its called strickly check.

// its not good practice to compare like this null or undefined to number.
console.log(null > 0);  //false 
console.log(null == 0); //false
console.log(null >= 0); //true the comparision operator < > <= >= are convert null into number 0 and one and then compare it.


