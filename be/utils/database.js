const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL || '',  {
}).then(() => {
    console.log('Database Connect')
}).catch((err) => {
    console.log('Database tidak connect', err.message)
}) 

module.exports = mongoose