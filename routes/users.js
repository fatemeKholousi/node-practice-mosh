const express = require('express')
const { User, validateUser } = require('./models/user')
const router = express.Router()
const _ = require('lodash')

router.post('/', async (req, res) => {
  const { error } = validateUser(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let user = await User.findOne({ email: req.body.email })
  if (user) return res.status(400).send('User is already registered')

  user = new User(_.pick(req.body, ['name', 'email', 'password']))
  // {name: req.body.name,
  // email:req.body.email,
  // password:req.body.password }
  await user.save()

  //create an object with these props

  res.send(_.pick(user, ['_id', 'name', 'email']))
})

module.exports = router
