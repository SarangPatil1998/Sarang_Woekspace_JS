// variable in javascript use to store a value.
// In javascript we have three types of variable
/* 1.var, 2.let, 3.const.*/

// 1. var variable is a globle scope variable access outside block

var Student = "sarang";
var Student = "aniket"; // No error
function myStudent() {
  Student = "surya"; // var can reintialised one declared.
  // console.log(Student);
}

// console.log(Student); //
// myStudent();

// 2. let variable is a block scope variable only access inside  block

let studentId = 1245;
// let studentId = "aram"; // uncaught error: student id already been declared.
function Sid() {
  let studentId = 5248;
  // console.log(studentId);
}

Sid();
// console.log(studentId);

// 3. const variable is also a block scope but it cannot declare as same name and also not reinitialized.

const accountId = 9802;
// const accountId = 4526; // uncaught error: student id already been declared.
// accountId = 7522; // Uncaught TypeError: Assignment to constant variable.

function sAccount() {
    const accountId = 8542;
    // console.log(accountId);
}
sAccount();
// console.log(accountId);


// variable declaration and defination 

// variable declaration means declare a  variable but not define value its call undefined.

let adress; // declared
// console.log(adress); //undefined

adress = "pune";  //variable defined
console.log(adress); // pune
