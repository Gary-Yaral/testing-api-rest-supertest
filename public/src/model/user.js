const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { userSchemaData } = require('../constants')

const userSchema = new Schema(userSchemaData)
model('User', userSchema);

module.exports = model('User', userSchema);