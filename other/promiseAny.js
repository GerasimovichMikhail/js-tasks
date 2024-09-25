function promiseAny(promises) {
  const errors = new Array(promises.length).fill(null);

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          errors[index] = err;
        })
        .finally(() => {
          if (errors.every((item) => item)) {
            reject({ errors });
          }
        });
    });
  });
}

// const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
// const promisesError = [
//   Promise.reject("Some error"),
//   Promise.resolve(1),
//   Promise.resolve(3),
// ];
const allPromisesError = [
  Promise.reject("Some error 1"),
  Promise.reject("Some error 2"),
  Promise.reject("Some error 3"),
];

promiseAny(allPromisesError)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.errors));
