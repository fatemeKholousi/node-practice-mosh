const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());

const genres = [
  {
    name: "slice of life",
    id: 1,
  },
  {
    name: "comedy",
    id: 2,
  },
  {
    name: "horror",
    id: 3,
  },
  {
    name: "thriler",
    id: 4,
  },
];

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.listen(3000, () => console.log("I can listen you from 3000"));

app.get("/api/genres/:id", (req, res) => {
  const selectedGenre = genres.find(
    (genre) => genre.id === parseInt(req.params.id)
  );
  if (!selectedGenre) return res.status(404).send("You Poor child look lost");
  res.send(selectedGenre);
});

//don't forget json type in postman
app.post("/api/genres", (req, res) => {
  const newGenre = { id: genres.length + 1, name: req.body.name };
  genres.push(newGenre);
  res.send(newGenre);
});

const validateGenres = (genre) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(genre);
};

app.put("/api/genres/:id", (req, res) => {
  const selectedGenre = genres.find(
    (genre) => genre.id === parseInt(req.params.id)
  );
  if (!selectedGenre) return res.status(404).send("You Poor child look lost");

  const { error } = validateGenres(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  selectedGenre.name = req.body.name;
  res.send(selectedGenre);
});

app.delete("/api/genres/:id", (req, res) => {
  const selectedGenre = genres.find(
    (genre) => genre.id === parseInt(req.params.id)
  );
  if (!selectedGenre) return res.status(404).send("You Poor child look lost");
  const index = genres.indexOf(selectedGenre);
  genres.splice(index, 1);

  res.send(selectedGenre);
});
// console.log("before");
// getUser(1212, displayUser);

// console.log("after");

// function displayUser(user) {
//   getRepositories(user.gitHubUserName, displayRepos);
// }

// function displayRepos(repos) {
//   getCommits((repo = "saam"), displayCommits);
// }

// function displayCommits(commits) {
//   console.log(commits);
// }

// function getCommits(commits, callBack) {
//   setTimeout(() => {
//     return callBack({ id: 235, message: "fix:" });
//   }, 200);
// }

// function getUser(id, callBack) {
//   setTimeout(() => {
//     return callBack({ id: id, gitHubUserName: "Fateme" });
//   }, 200);
// }

// function getRepositories(username, callBack) {
//   console.log("my git user name is : " + username);
//   setTimeout(() => {
//     return callBack(["rep1", "rep2", "rep3"]);
//   }, 2000);
// }
