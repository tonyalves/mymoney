const express = require('express')

module.exports = function(server) {
    const router = express.Router()

    console.log('starting API')
    server.use('/api', router)
    server.get('/', function (req, res) {
        res.send('Hello World!');
      });
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}