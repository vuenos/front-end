// 1. Use strict
// added in ES 5
// use this for Vanila javascript
'use strict';

// 2. Variable
// let (added in ES6)

let globalName = 'global name';
{
  let name = 'jintae';
  console.log(name);
  name = 'Hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't evebr use this🤢)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 66;
  var age;
}
console.log(age);