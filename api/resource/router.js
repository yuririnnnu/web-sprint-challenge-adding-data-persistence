// build your `/api/resources` router here
const Resource = require('./model')
const router = require('express').Router()

router.get('/', (req, res) => {
    Resource.getAll()
    .then(r => {
        res.json(r)
    })
    .catch(e => res.status(400).json({message: e.message}))
})

router.post('/', (req, res) => {
    Resource.create(req.body)
    .then(() => res.json(req.body))
    .catch(e => res.status(400).json({message: e.message}))
})

module.exports = router