// --- "console.log()" - You can use if write anything to your browsers console.

console.log('Hello, World!');

// ------- ** Values and Variables

let firstName = 'Anil';
console.log(firstName); // variable refers to the value store in it.

// --- In JavaScript a variable can be declared using [const, let & var]

// "const" - The value cannot be changed.
const birthYear = 2002;
// birthYear = 2001; // TypeError: Assignment to constant variable.
console.log(birthYear);

// "let" - The value can be changed.
let myAge = 2024 - birthYear;
myAge = 2030 - birthYear;
console.log(myAge);

// "var" - The value can be changed. NOT Recommend
var currentJob = 'back-end developer';
currentJob = 'full-stack developer';
console.log(currentJob);

// ------- ** Variable Naming & Comments
/*
1. The name should be unique.
2. The name should not be any reserved keyword.
3. The name must start with a character, _ and $.
*/

// Single line Comment

/* 
   This is a
   multi line
   Comment
*/
