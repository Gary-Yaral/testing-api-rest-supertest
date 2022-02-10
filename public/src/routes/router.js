const { Router } = require('express')
const router = new Router();
const User = require('../model/user');
const { userSchemaData } = require('../constants');

router.post('/create', async (req, res) => {
  const bodyLength = Object.keys(req.body).length
  const schemaLength = Object.keys(userSchemaData).length
  if (bodyLength === schemaLength ) {
    const user = new User(req.body)
    const result = await user.save()
    return res.status(200).send(result)
  }

  return res.status(400).json({error: 'Bad request'})
})

module.exports = { router }
