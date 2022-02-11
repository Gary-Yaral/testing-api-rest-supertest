const { Router } = require('express')
const router = new Router();
const User = require('../model/user');
const { userSchemaData } = require('../constants');
const bcrypt = require('bcrypt');

router.post('/create', async (req, res) => {
  const bodyLength = Object.keys(req.body).length
  const schemaLength = Object.keys(userSchemaData).length
  if (bodyLength === schemaLength ) {
    const { name, lastname, email, password } = req.body;
    const SALT = 10
    const passwordHash = await bcrypt.hash(password, SALT);
    const user = new User({
      name,
      lastname, 
      email, 
      password: passwordHash
    })
    const result = await user.save()
    return res.status(200).send(result)
  }

  return res.status(400).json({error: 'Bad request'})
})

router.get('/get-all', async (req, res) => {
  const allUsers = await User.find({})
  return res.status(200).json(allUsers);
})

module.exports = { router }
