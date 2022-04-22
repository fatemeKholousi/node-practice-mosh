const express = require("express");
const mongoose = require("mongoose");

// const rentals = require("./routes/rentals");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const movies = require("./routes/movies");
const users=require("./routes/users");
const app = express();


mongoose
  .connect("mongodb://localhost/vidly-backend")
  .then(() => console.error("you connected to vidly backend"))
  .catch((error) => console.log(error));

app.use(express.json());

app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);
// app.use("/api/rentals", rentals);
app.use("/api/users", users);


const port = process.env.PORT || 9894;
app.listen(port, () => console.log(`listening from port ${port}`));
