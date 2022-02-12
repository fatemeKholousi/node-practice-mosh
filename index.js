console.log("before");

getUser(1)
  .then((user) => getRepositories(user))
  .then((repos) => getCommits(repos))
  .then((commits) => console.log(commits))
  .catch((err) => console.log(err));

console.log("after");

function displayUser(user) {
  getRepositories(user.gitHubUserName, displayRepos);
}

function displayRepos(repos) {
  getCommits((repo = "saam"), displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getCommits(commits) {
  console.log("commit=", commits);

  return new Promise(
    (resolve, reject) =>
      setTimeout(() => resolve({ id: 235, message: "fix:" })),
    2000
  );

  // setTimeout(() => {
  //   return callBack({ id: 235, message: "fix:" });
  // }, 200);
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log("read from db...");
    setTimeout(() => {
      resolve({ id: id, gitHubUserName: "Fateme" });
    }, 2000);
  });
}

// setTimeout(() => {
//   return callBack({ id: id, gitHubUserName: "Fateme" });
// }, 200);

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    console.log(username);
    setTimeout(() => {
      return resolve(["rep1", "rep2", "rep3"]);
    }, 2000);
  });
  // console.log("my git user name is : " + username);
}
