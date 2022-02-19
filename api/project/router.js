const Project = require('./model')
const router = require('express').Router()

router.get('/', (req, res) => {
    Project.getAll()
    .then(p => {
        for (i in p) {
            if (p[i].project_completed == 0) {
                p[i].project_completed = false
            } else {
                p[i].project_completed = true
            }
        }
        res.json(p)
    })
    .catch(e => res.status(400).json({message: e.message}))
})

router.post('/', (req, res) => {
    Project.create(req.body)
    .then(p => {
        if (p.project_completed == 0) {
            p.project_completed = false
        } else {
            p.project_completed = true
        }        
        res.json(p)
    })
    .catch(e => res.status(400).json({message: e.message}))
})

module.exports = router