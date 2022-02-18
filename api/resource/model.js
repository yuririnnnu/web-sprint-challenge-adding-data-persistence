// build your `Resource` model here
const db = require('../../data/dbConfig')

const create = (resource) => {
    return db('resources').insert(resource)
}
const getAll = () => {
    return db('resources').select('*')
}


module.exports = {
    create,
    getAll
}