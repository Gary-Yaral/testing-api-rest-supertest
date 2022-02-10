const mongoose = require('mongoose');
require('dotenv').config()
 /* Database access */
const { USER, PASSWORD, DB_NAME } = process.env;
const URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.oyvej.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(URI) 
  .then(res => console.log('Database is connected'))
  .catch(e => console.log('Error: ' + e))