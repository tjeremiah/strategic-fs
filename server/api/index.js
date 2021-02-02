// routes go here
// this file is like a table of contents for the routes created
const router = require('express').Router()

router.use('/creditors', require('./creditors'))

//if a request is made that starts with `/api`
// but there no corresponding router, this piece of middleware will
// generate a 404 error.

router.use((req, res, next) => {
    const err = new Error('API route not found')
    err.status = 404
    next(err)
})

module.exports = router