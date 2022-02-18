const Project = require('./model')
const router = require('express').Router()

router.get('/', (req, res) => {
    Project.getAll()
    .then(p => {
        res.json(p)
    })
    .catch(e => res.status(400).json({message: e.message}))
})

router.post('/', (req, res) => {
    Project.create(req.body)
    .then(() => res.json(req.body))
    .catch(e => res.status(400).json({message: e.message}))
})

module.exports = router