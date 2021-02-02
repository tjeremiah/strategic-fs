'use strict'

// Bring Sequelize instance ('db') together
// with your models (which are in separate modules in this directory) 

const db = require('./database')
const Creditor = require('./models/Creditor')

module.exports = {
    db,
    Creditor,
}