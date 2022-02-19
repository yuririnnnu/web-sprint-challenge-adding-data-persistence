const Task = require('./model')
const router = require('express').Router()

router.get('/', (req, res) => {
    Task.getAll()
    .then(p => {
        for (i in p) {
            console.log(i)
            console.log(p[i].task_completed)
            if (p[i].task_completed == 0) {
                p[i].task_completed = false
                
            } else {
                p[i].task_completed = true
            }
        }
        res.json(p)
    })
    .catch(e => res.status(400).json({message: e.message}))
})

router.post('/', (req, res) => {
    Task.create(req.body)
    .then(p => {
        if (p.task_completed == 0) {
            p.task_completed = false
            
        } else {
            p.task_completed = true
        }
        res.json(p)
    })
    .catch(e => res.status(400).json({message: e.message}))
})

module.exports = router
