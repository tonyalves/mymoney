const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://sa:1234@cluster0-shard-00-00-gj0te.mongodb.net:27017/mymoney,cluster0-shard-00-01-gj0te.mongodb.net:27017/mymoney,cluster0-shard-00-02-gj0te.mongodb.net:27017/mymoney?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{ useNewUrlParser: true })