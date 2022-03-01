const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connected to MongoDb..."))
  .catch((err) => console.log(err));

const courseScema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseScema);
async function createCourse() {
  const course = new Course({
    name: "React.js Couse",
    author: "Fatte",
    tags: ["node", "backend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const pageNumber = 2;
  const pageSize = 10;
  const courses = await Course.find({
    author: "Fateme",
    isPublished: true,
    // price: { $in: [10, 15 , 20], gte: 10 },
  })
    .sort({ name: 1 })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .select({ name: 1, tags: 1 })
    .count();
  console.log(courses);
}
//
// createCourse();
getCourses();
