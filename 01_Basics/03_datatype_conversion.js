// datatype conversion in convert a one type of data in another type.

// convert number to other datatype

let number = 33;

let toString = String(number); //it convert in string.
// console.log(typeof toString);

let toBoolean = Boolean(number);
// console.log(toBoolean);

let toSymbol = Symbol(number);
// console.log(toSymbol);

// console.log(NaN === NaN); // false

a = [1,2,3,4,5];
console.log(a.slice(0,4)); 

// Referance type datatypes object, array, function

const mobile = ["moto", "samsung","nokia","mi"];  // This is array used to store multiple values.

let myObj = {                // This is object used to store key and value pair.
    name:"sarang",
    age :26,
    add : "pune",
}

const myfunction = function() {
    console.log("this is function in a variable");
}

//++++++++++++++++++++++++++++++++++ stack and heap memory ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive type)  Heap (Non-primitive type)

// Stack memory create copy of variable and Heap allocate the referance of object

let myVariable = "Sarang";
console.log(myVariable);

let newVariable = myVariable;
newVariable = "Patil"

console.log(myVariable); //Sarang
console.log(newVariable); //Patil

let user = {
    name:"user1",
    age:20,
    email:"sarang@gmail.com"
}

let user2 = user;

user2.name = "user2";

console.log(user);
console.log(user2);


