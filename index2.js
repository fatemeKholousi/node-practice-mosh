const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("connected to DB"))
  .catch((error) => console.log(error));

const exerciseSchema = new mongoose.Schema({
  name:String ,
  tags: [String ],
  author: String,
  isPublished: Boolean,
  price: Number,
});

const Course= mongoose.model("Course",exerciseSchema)
async function getCourses(){
return await Course.find({isPublished:true}).or ([{price:{$gte:15}},{name:/.*by.*/i}]).select('name author price')
//  return await Course.find({isPublished:true,tags: {$in: ['frontend','backend']}}).sort('-price').select('name author price')


}
async  function run(){
  const see=await getCourses()
  console.log(see)
}

run()