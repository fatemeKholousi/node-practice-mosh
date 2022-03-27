const {Customer,validate:validateCustomers}=require("./models/customer")
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  //get all customers
  const customer = await Customer.find().sort("name");
  res.send(customer);
});

//don't forget json type in postman
router.post("/", async (req, res) => {
  const { error } = validateCustomers(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  let customers = new Customer({
    name: req.body.name,
    phone: req.body.phone,
    isGold: req.body.isGold,
  });
  customers = await customers.save();
  res.send(customers);
});

router.put("/:_id", async (req, res) => {
  const { error } = validateCustomers(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const customer = await Customer.findByIdAndUpdate(
    req.params._id,{  name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold,}
  );
  if (!customer) return res.status(404).send("You Poor child look lost");
  res.send(customer);
});

router.delete("/:_id", async(req, res) => {
    const customer=await Customer.findByIdAndRemove(req.params._id)
    if (!customer) return res.status(404).send("You Poor child look lost");
    res.send(customer);
  });
  
  router.get("/:_id", async(req, res) => {
    const customer=await Customer.findById(req.params._id)
    if (!customer) return res.status(404).send("You Poor child look lost");
    res.send(customer);
  });



module.exports = router;
