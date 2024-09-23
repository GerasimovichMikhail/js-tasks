function promiseAll(promises) {
  const resolvedPromises = new Array(promises.length).fill(null);

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          resolvedPromises[index] = value;

          if (resolvedPromises.every((item) => item)) {
            resolve(resolvedPromises);
          }
        })
        .catch((error) => reject(error));
    });
  });
}

const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
// const promisesError = [
//   Promise.resolve(1),
//   Promise.reject("Some error"),
//   Promise.resolve(3),
// ];

promiseAll(promises)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
