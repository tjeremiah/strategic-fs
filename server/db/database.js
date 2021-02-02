'use strict'

// establishing a connection to the Postgres database by creating a  
//Sequelize instance (called 'db')

const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

console.log(chalk.yellow('Opening database connection'))

const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
    logging: false
});

module.exports = db