// build your `Task` model here
const db = require('../../data/dbConfig')

const create = (task) => {
    return db('tasks').insert(task)
        .then(([task_id]) => {
            return db('tasks').where('task_id', task_id).first()
        })
}

const getAll = () => {
    return db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')
}

module.exports = {
    create,
    getAll
}