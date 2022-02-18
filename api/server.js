// build your server here and require it from index.js
const express = require('express')
const server = express()
const taskRouter = require('./task/router')
const resourceRouter = require('./resource/router')
const pjRouter = require('./project/router')

server.use(express.json())
server.use('/api/tasks', taskRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/projects', pjRouter)

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server