const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p1");
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p1");
    resolve(2);
  }, 2000);
});

//paraller promises
// Promise.all([p1, p2]).then((result) => {
//   console.log(result);
// });

//it's a race who can win sooner?
Promise.race([p1, p2]).then((result) => {
  console.log(result);
});
