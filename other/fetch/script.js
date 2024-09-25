function fetch(url, options) {
  const xhr = new XMLHttpRequest();
  const method = options?.method ? options?.method : "GET";

  xhr.open(method, url);
  if (options?.body) {
    xhr.send(options.body);
  } else {
    xhr.send();
  }

  return new Promise((resolve, reject) => {
    xhr.onload = function () {
      if (xhr.status != 200) {
        reject(xhr.statusText);
      } else {
        resolve(xhr.response);
      }
    };
  });
}

const testUrl = "https://jsonplaceholder.typicode.com/users";
fetch(testUrl)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
