const { app } = require('./app')
require('dotenv').config()
require('./db/mongo') 

  /* Server data */
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = { app }
