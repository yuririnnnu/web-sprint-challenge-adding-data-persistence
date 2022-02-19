const db = require('../../data/dbConfig')

const create = (project) => {    
    return db('projects').insert(project)
        .then(([project_id]) => {
            return db('projects').where('project_id', project_id).first()
        })
    
}

const getAll = () => {
    return db('projects')
}

module.exports = {
    create,
    getAll
}