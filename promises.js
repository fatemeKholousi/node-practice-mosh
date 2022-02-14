//create a promise
const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(1);
    reject(new Error("message"));
  }, 2000);
});

//consume promise
p.then((result) => {
  console.log("Result", result);
}).catch((err) => console.log(err.message));
