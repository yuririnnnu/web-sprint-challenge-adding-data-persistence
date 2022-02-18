const db = require('../../data/dbConfig')

const create = (project) => {
    return db('projects').insert(project)
}
const getAll = () => {
    return db('projects')
}


module.exports = {
    create,
    getAll
}