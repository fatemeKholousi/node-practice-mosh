console.log("before");
getUser(1212, displayUser);

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

function getCommits(commits, callBack) {
  setTimeout(() => {
    return callBack({ id: 235, message: "fix:" });
  }, 200);
}

function getUser(id, callBack) {
  setTimeout(() => {
    return callBack({ id: id, gitHubUserName: "Fateme" });
  }, 200);
}

function getRepositories(username, callBack) {
  console.log("my git user name is : " + username);
  setTimeout(() => {
    return callBack(["rep1", "rep2", "rep3"]);
  }, 2000);
}
