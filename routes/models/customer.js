const mongoose = require("mongoose");
const Joi = require("joi");
const { Schema } = mongoose;

const customerSchema = new Schema({
    isGold:{type:Boolean,default:false} ,
    name: {type:String,required:true,maxlength:50,minlength:5},
    phone:{type:String,required:true,maxlength:50,minlength:5} ,
  });
  const Customer = mongoose.model("crud-customers", customerSchema);
  
  const validateCustomers = (customer) => {
    const schema = Joi.object({
      name: Joi.string().min(5).max(50).required(),
      phone: Joi.string().min(5).max(50).required(),
      isGold: Joi.boolean().required(),
    });
    return schema.validate(customer);
  };

  exports.Customer=Customer;
  exports.validate=validateCustomers;