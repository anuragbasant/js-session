// loops
// js objects -> key value map or pair -> {key: value}
for (let i = 0; i <= 5; i++) {
  console.log({ i });
}

let n = 5;
while (n > 0) {
  console.log({ n });
  n--;
}

// data collections i.e array

arr = [11, 12, 13, 14, 15];

for (let i = 0; i < arr.length; i++) {
  console.log({ arr: i });
}

// forEach

arr.forEach((value, index) => {
  console.log({ value, index });
});

// map -> takes a collection and returns new collection, source and destination arr length will be same
// i.e reads each element process or modify and returns new array
sourceArr = [1, 2, 3];
destArr = sourceArr.map((value, index) => {
  return value * 2;
});
console.log(destArr);


// conditions
/**
 * true && true -> true
 * true && false && true && true -> false
 * false && true -> false
 * false && false -> false
 * 
 * true || false -> true
 * true || true -> true
 * false || false -> false
 */

const age = 30;
const notSeniorCitizen = false;
const isValidUser = true;
const isAdmin = true;

if (age > 18 && age < 30) {
  console.log('young');
}

if (isValidUser) {
  console.log('valid user');
}

if (isValidUser && notSeniorCitizen) {
  console.log('valid user who is not senior citizen');
} else {
  console.log('failed');
}

if (isAdmin || age > 50) {

}


if (isAdmin) {

} else if (notSeniorCitizen) {

} else {

}


// short
const getUserType = () => {
  if (isAdmin)
    return 'admin user';

  return 'normal user';
}


console.log(getUserType());