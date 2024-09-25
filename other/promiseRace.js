function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      item.then((result) => resolve(result)).catch((error) => reject(error));
    });
  });
}

// const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
const promisesError = [
  Promise.reject("Some error"),
  Promise.resolve(1),
  Promise.resolve(3),
];
// const allPromisesError = [
//   Promise.reject("Some error 1"),
//   Promise.reject("Some error 2"),
//   Promise.reject("Some error 3"),
// ];

promiseRace(promisesError)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
