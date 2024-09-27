/* 
  Without modifying the functions, make a call to them so that the console outputs a, b, c in order. 
  1. Without promises 
  2. With promises 
*/

function foo1(callback) {
  setTimeout(() => callback("a"), Math.random * 100);
}

function foo2(callback) {
  setTimeout(() => callback("b"), Math.random * 100);
}

function foo3(callback) {
  setTimeout(() => callback("c"), Math.random * 100);
}

//1
// setTimeout(() => foo1(console.log), 0);
// setTimeout(() => foo2(console.log), 1000);
// setTimeout(() => foo3(console.log), 2000);

//2
// Promise.resolve()
//   .then(() => foo1(console.log))
//   .then(() => foo2(console.log))
//   .then(() => foo3(console.log));
