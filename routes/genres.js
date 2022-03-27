const express = require("express");
const {Genre,validateGenres}=require("./models/genre")

const router=express.Router();

router.get("/",async (req, res) => {
  //get all genres
  const genres=await Genre.find().sort("name")
  res.send(genres);
});

//don't forget json type in postman
router.post("/", async(req, res) => {

  const {error}=validateGenres(req.body)
  if(error){return res.status(400).send(error.details[0].message)}

  let genre = new Genre({  name: req.body.name });
   genre=await genre.save()

  res.send(genre);
});

router.put("/:id", async(req, res) => {
  const { error } = validateGenres(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre=await Genre.findByIdAndUpdate(req.params.id,{name:req.body.name},{
    new:true,
  })

  if (!genre) return res.status(404).send("You Poor child look lost");

  res.send(genre );
});


router.delete("/:id", async(req, res) => {
  const genre=await Genre.findByIdAndRemove(req.params.id)

  if (!genre) return res.status(404).send("You Poor child look lost");

  res.send(genre);
});

router.get("/:id", async(req, res) => {
  const genre=await Genre.findById(req.params.id)

  if (!genre) return res.status(404).send("You Poor child look lost");

  res.send(genre);
});

module.exports=router



