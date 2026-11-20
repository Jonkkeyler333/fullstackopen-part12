require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"])
const mongoose = require('mongoose')
const redis = require('../redis')
const Todo = require('./models/Todo')
const { MONGO_URL } = require('../util/config')

if (MONGO_URL && !mongoose.connection.readyState) {
  mongoose.connect(MONGO_URL)
}

module.exports = {
  Todo
}
