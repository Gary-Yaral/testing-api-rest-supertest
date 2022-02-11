const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { userSchemaData } = require('../constants')

const userSchema = new Schema(userSchemaData)

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id,
    delete returnedObject._id,
    delete returnedObject.__v,
    delete returnedObject.password
  }

}) 

module.exports = model('User', userSchema);