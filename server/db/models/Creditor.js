const Sequelize = require('sequelize');
const db = require("../database");


const Creditor = db.define('creditor', {
    creditorName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    firstName:  {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    lastName: {
       type: Sequelize.STRING,
       allowNull: false,
   },
    minPaymentPercentage: {
       type: Sequelize.DECIMAL(10,2),
        validate: {
            min: 0.0,
            max:4.0,
        } 
    },
    balance: {
        type: Sequelize.INTEGER,
    }   
})

module.exports = Creditor