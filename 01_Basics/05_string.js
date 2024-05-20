const name = "sarang";
const age =  25;

console.log(name + age + "year");

// we can use bactiks to conacate string or use place holders for this.

console.log(`hi my name is ${name} i am ${age} year old`);

// we can declare string by using constructore 

const newString = new String("hello_world")
console.log(newString);
console.log(newString[0]); // o/p 5
console.log(newString.__proto__); // to access all the methods(functions). {}

console.log(newString.length); // 5
console.log(newString.toUpperCase()); //HELLO
console.log(newString.toLowerCase); // hello
console.log(newString.charAt(2)); // l
console.log(newString.indexOf('o')); // 4

const string2 = newString.substring(1, 4)
console.log(string2);