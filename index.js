const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi Baly");
});
app.get("/api/authors", (req, res) => {
  res.send([1, 2, 3]);
});
app.listen(3000, () => {
  console.log("Listening");
});
// app.post()
// app.put()
// app.delete()
