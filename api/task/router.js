// build your `/api/tasks` router here
const Task = require('./model')
const router = require('express').Router()

router.get('/', (req, res) => {
    Task.getAll()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(e => res.status(400).json({message: e.message}))
})

router.post('/', (req, res) => {
    Task.create(req.body)
    .then(() => res.json(req.body))
    .catch(e => res.status(400).json({message: e.message}))
})

module.exports = router
