/**
 * js defines seven build-in types
 * null
 * undefined
 * boolean
 * number
 * string
 * object
 * symbol - added in ES6
 */

// typeof -> return the type of variable or value
console.log(typeof 54 === 'number'); // number
console.log(typeof 'hello' === 'string'); // string
console.log(typeof { name: 'arvind' } === 'object'); // object
console.log(typeof true === 'boolean'); // boolean
console.log(typeof Symbol() === 'symbol');

/**
 * variable declare
 * 1. var -> old 
 * 2. let -> can be changed or reassigned
 * 3. const -> can't be change once assigned
 */

var a; // without assignment it's undefined
console.log('printing type of var a', typeof a); // undefined
console.log('printing type of var b', typeof b); // undefined

var nullValue = null; // falsy value
console.log('printing type of var nullValue', typeof nullValue); // object
console.log(nullValue); // null
console.log(!nullValue); // true

// array and built in functions

// array
console.log(typeof [1, 2, 3]); //object

var arr = [1, '2', [3, 4]]; // 0, 1, 2 -> 3
console.log('arr length', arr.length);
console.log('first elem', arr[0]);
console.log('last elem', arr[arr.length - 1]);

var arr = [1, 2, 13, 4, 5];

// print index of value in the array
console.log('index of value 3 is->', arr.indexOf(13), ' legth of arr is->', arr.length);
arr.push(6);
console.log('length -> ', arr.length);
arr.pop();
console.log('length -> ', arr.length);

var result = arr.concat([6, 7, 8]); // creates and returns a new array by appending(add in the end)

console.log('new length', arr.concat([6, 7, 8]));

// select elements from the array
// console.log(arr.slice(0,3));

// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Note: This method changes the original array.
// array.splice(index, howmany, item1, ....., itemX)
arr.splice(2, 0, 34, 56);
console.log(arr);

// function
function addition(a, b) {
  return a + b;
  // ...
}
// arrow function or lambda
(a, b) => {
  sum = a + b;
  console.log(sum);
  return sum;
}
// or
(a, b) => a + b

// one func argument
a => a

// forEach
arr.forEach((value, index) => {
  console.log('arr value at', index, ' is ', value);
});

// for
for (var i = 0; i < arr.length; i++) {
  console.log('arr value at', i, ' is ', arr[i]);
}



function test(value, index) {
  console.log('arr value at', index, ' is ', value);
}

arr.forEach(test);

arr.forEach((value, index) => console.log('arr value at', index, ' is ', value));
arr.forEach(value => console.log('arr value is ', value));


var arr = ['arvind', 'anurag', 12, 89, true];
var data = new Array('arvind', 'anurag');
var data = new Array(10); // creates an array with 10 undefined elem

var emptyArr = []; // create empty array

// access array element
// print first -> arr[0]

// sorting -> arr.sort
var stringArr = ['aa', 'cc', 'bb', 'ab']
console.log('sorted array', stringArr.sort((a, b) => a - b));

var numArr = [23, 123, 1, 7983, 23]
console.log('sorted array', numArr.sort((a, b) => a - b));

// function compare(a, b) {
//   return a - b; // negative // 0 // positive 
// }

// numArr.sort(compare);

// check if perticular element is present in array
var arr = [1, 2, 3, 4];
// check if 10 contains in array

console.log(arr.indexOf(1)); // 0
console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(10)); // -1 element not present



// new array function in ES6 -> ECMA Script 6
// 1. Array.of()
let es5Names = Array(3); // [undefined, undefined, undefined]
console.log(es5Names.length);

let es6Names = Array.of(3); // return a new array of length 1 with value 3 i.e [3]
console.log(es6Names.length);

// 2. Array.from(arr, arrowfunc, thisArgs)

let prices = [100, 200, 300];

let pricesWithGST = Array.from(prices, (price) => price + price * 0.10);
console.log(pricesWithGST);

// you can't use arrow functions because arrow function can't be used with this keyword
let pricesWithGSTAndTranFee = Array.from(prices, function (price) {
  return price + price * 0.10 + this.fee
}, { fee: 10 });

console.log(pricesWithGSTAndTranFee);


// array.fill(fillelem, startindex, lastindex)

var arr = [1, 2, 3];
// arr.fill(100); // fills array
arr.fill(100, 1, 2)
console.log(arr);

// arr.find(arrowfunc) 
var arr = [1, 2, 3];

// find 2
var result = arr.find(elem => elem === 2);
console.log(result);

// arr.findIndex
var index = arr.findIndex(elem => elem === 20);
console.log(index);