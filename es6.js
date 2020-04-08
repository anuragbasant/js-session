class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class AdminPerson extends Person {
  constructor(name, age, adminId) {
    super(name, age); // calling parent class constructor
    this.adminId = adminId;
  }
}

let obj1 = new Person('arvind', 30, 8990);
let obj2 = new AdminPerson('anurag', 22, 232);

var obj = { name: 'safari', milage: 200, model: 'zex', year: 2020 }


var obj = {
  firstName: 'arvind',
  lastName: 'kumar',
  fullname: function () {
    return this.firstName + ' ' + this.lastName;
  }
}

console.log(obj.fullname());


// variable declartions -> let and const

const b = 23;
{
  let a = 2;
  console.log(a);
}

console.log(b);

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// important
// spread operator ...

let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let arr3 = [...arr1, ...arr2, 6];
console.log(arr3);

let o1 = { key1: 'value1', key2: 35 }
let o2 = { key3: true, key4: 12.67 }

let o3 = { ...o1, ...o2 };

console.log(o3);

// rest param

function foo(x, y, ...z) {
  console.log(x, y, z);
}

foo(1, 2, 23, 45, 56, 67)


// -----------------------

// var test = 0; // 0, null, undefined is falsy value in js and 1 is true
// if (test) {
//   console.log('pass');
// } else {
//   console.log('fail');
// }


function bar(a, b) {
  a = a || 12;
  // b = b || 10; // wrong 0 interpretation
  b = (b !== undefined) ? b : 10;
  sum = a + b;
  console.log(sum);
}

bar();
bar(6, 0); // wrong 0 interpretation
bar(6, undefined)
bar(6);


// default param

function bar1(a = 12, b = 10) {
  console.log(a + b);
}

bar(77);


// Destructuring

let user = { email: 'arv@gmail.com', userName: 'arv123', id: 2134, age: 30 };
console.log(user.email);
console.log(user.userName);
console.log(user['email']);

// two lines
// const email = user.email;
// const userName = user.userName;

// console.log(email, userName);

const { email, userName, ...rest } = user
console.log(email, userName, rest);

function print({email, userName, ...rest}) {
  console.log('user', {email, userName}, rest);
}
print(user)


// Destructuring for array

const [aa, ab, ...others] = [1, 2, 4, 6, 7];
console.log(aa, ab, others);


const name = 'arvind';

// let message = 'hello' + ' ' + name;

// using template literals
message = `hello ${name}!!`

console.log(message);