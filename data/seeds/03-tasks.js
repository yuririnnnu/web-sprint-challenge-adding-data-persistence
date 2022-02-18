
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_id: 1, task_description: 'practice coding', task_notes: 'urgent', task_completed: false, project_id: 1},
        {task_id: 2, task_description: 'come up with all the experiences you have that you want to write down in the resume', task_notes: 'not urgent', task_completed: false, project_id: 3},
        {task_id: 3, task_description: 'familiarize all the concepts you have learned in Bloom tech', task_notes: 'urgent', task_completed: false, project_id: 2},
      ]);
    });
};
