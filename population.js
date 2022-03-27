const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const Author = mongoose.model(
  "Author",
  new mongoose.Schema({
    name: String,
    bio: String,
    website: String,
  })
);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    // _id: new mongoose.Types.ObjectId(),
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  })
);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find()
    .select("name author")
    //it's like author -->    .populate("author");
    //it's like author.name -->    .populate("author", "name");
    //it's like author.name without showing id -->    .populate("author", "name -_id");

    .populate("author", "name -_id");
  console.log(courses);
}

// createAuthor("Fateme", "My exercise", "My Website");

// createCourse("My Course", "6240cd59cb9426429be80cd5");

listCourses();
