// build your `Task` model here
const db = require('../../data/dbConfig')

const create = (task) => {
    return db('tasks').insert(task)
}

const getAll = () => {
    return db('tasks').select('*')
}

module.exports = {
    create,
    getAll
}