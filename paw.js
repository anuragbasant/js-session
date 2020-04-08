// promise async await

// synchronous vs asynchronous
// asynchronous programming -> non blocking


// all async code returns promise

// function getSlowData() {

// };

// let callserver = () => {
//   let end = 1000000000;
//   while (end > 0) {
//     end--;
//   }
//   return 'helooo'
// }

const callserver = (delay) => {
  return new Promise((resolve, reject) => {
    const end = Date.now() + delay;
    while (Date.now() < end) { }
    return resolve('hello');
  });
};

let getSlowData = async () => {
  // return new Promise((resolve, reject) => {
  //   let data = callserver(3000);

  //   if (data) {
  //     return resolve(data);
  //   } else {
  //     reject('data not fetched');
  //   }
  // })

  let data = await callserver(3000);
  console.log(data);
};
getSlowData();

console.log('test');

// console.log(getSlowData());

// getSlowData()
//   .then(value => {
//     console.log(value);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const resData = await getSlowData();


// const app = async () => {
//   const resData = await getSlowData();
//   console.log(resData);
// }

// app();
