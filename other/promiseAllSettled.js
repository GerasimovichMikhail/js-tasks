function promiseAllSettled(promises) {
  const result = new Array(promises.length).fill(null);

  return new Promise((resolve) => {
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          result[index] = {
            status: "fulfilled",
            value: res,
          };
        })
        .catch((error) => {
          result[index] = {
            status: "rejected",
            reason: error,
          };
        })
        .finally(() => {
          if (result.every((item) => item)) {
            resolve(result);
          }
        });
    });
  });
}

// const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
// const promisesError = [
//   Promise.resolve(1),
//   Promise.reject("Some error"),
//   Promise.resolve(3),
// ];
const allPromisesError = [
  Promise.reject("Some error 1"),
  Promise.reject("Some error 2"),
  Promise.reject("Some error 3"),
];

promiseAllSettled(allPromisesError).then((res) => console.log(res));
