const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    authors: [authorSchema],
  })
);

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId) {
  //first way:
  // const course = await Course.findById(courseId);
  // course.author.name = "fateme kholousi";
  // course.save();

  //second way:
  const course = await Course.update({
    _id: courseId,
    $set: {
      "author.name": "john smith",
    },
  });
}

createCourse("Node Course", [
  new Author({ name: "Mosh" }),
  new Author({ name: "Fateme" }),
]);
// updateAuthor("6240d8bbab6ca6de38b65161");
