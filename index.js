const express = require("express");
const Joi = require("joi");
const app = express();

const authors = [
  { id: 1, name: "L.M.M" },
  { id: 2, name: "R.L.Stine" },
  { id: 3, name: "Jane webster" },
];
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi Baily");
});

app.get("/api/authors", (req, res) => {
  res.send(authors);
});

const port = process.env.PORT || 3000;
// in terminal:
// set PORT=6000
app.listen(port, () => {
  console.log(`listen you from ${port}`);
});

app.get("/api/authors/:id", (req, res) => {
  const authy = authors.find((item) => item.id === parseInt(req.params.id));
  if (!authy) res.status(404).send("404!");
  res.send(authy);
});

app.post("/api/authors", (req, res) => {
  const schema = { name: Joi.string().min(3) };
  const newAuthor = { id: authors.length + 1, name: req.body.name };
  authors.push(newAuthor);
  res.send(newAuthor);
});

app.put("/api/authors/:id", (req, res) => {
  const authy = authors.find((item) => item.id === parseInt(req.params.id));
  if (!authy) res.status(404).send("404!");

  // console.log(result);
  // const result = validateAuthy(req.body);
  const { error } = validateAuthy(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  authy.name = req.body.name;
  res.send(authy);
});

function validateAuthy(authy) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(authy);
}

app.delete("/api/authors/:id", (req, res) => {
  const authy = authors.find((item) => item.id === parseInt(req.params.id));
  if (!authy) res.status(404).send("404!");
  const index = authors.indexOf(authy);
  authors.splice(index, 1);

  res.send(authy);
});
