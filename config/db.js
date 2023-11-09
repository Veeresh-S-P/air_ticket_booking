const mongoose=require('mongoose')

require('dotenv').config()

const monngoDB_URL=process.env.monngoDB_URL
const connection =mongoose.connect(monngoDB_URL)

module.exports = connection;