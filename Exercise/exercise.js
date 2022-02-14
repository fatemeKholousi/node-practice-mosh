// getCustomer(1, (customer) => {
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log("Top movies: ", movies);
//       sendEmail(customer.email, movies, () => {
//
//       });
//     });
//   }
// });

async function mailMe() {
  try {
    const customer = await getCustomer(1);
    console.log(customer);
    if (customer.isGold) {
      const movie = await getTopMovie();
      console.log(movie);
      const mail = await sendEmail(customer.email, movie);
      console.log(mail);
      console.log("Email sent...");
    }
  } catch (err) {
    console.log(err);
  }
}
mailMe();
function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "fatemekholousizaer@gmail.com",
      });
    }, 4000);
  });
}

function getTopMovie() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(email, movies);
    }, 4000);
  });
}
