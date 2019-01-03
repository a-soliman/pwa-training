// JS Promises

// Classic callback

// function addExtra(price, callback) {
//   setTimeout(() => {
//     callback(price + 1);
//   }, 300);
// }

// addExtra(1, newPrice => {
//   console.log(newPrice);
// });

// Promise
// function addExtra(price) {
//   return new Promise((resolve, reject) => {
//     console.log("current price: ", price);
//     if (price > 2) {
//       reject("Price can not exceed 3");
//     }

//     setTimeout(() => {
//       resolve(price + 1);
//     }, 300);
//   });
// }

// addExtra(1)
//   .then(addExtra)
//   .then(addExtra)
//   .then(addExtra)
//   .catch(err => console.log(err));

let price = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(99.99);
  }, 300);
});

let slowPrice = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(199.99);
  }, 800);
});

let promises = [price, slowPrice];
Promise.all(promises)
  .then(resolvedPrice => console.log(resolvedPrice))
  .catch(err => console.log(err));
