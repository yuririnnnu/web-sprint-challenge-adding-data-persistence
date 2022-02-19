
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {project_id: 1, project_name: 'Learn endpoints', project_description:'Get basic knowledge of creating endpoints to be a full stack developer', project_completed: 1},
        {project_id: 2, project_name: 'Create resume', project_description:'Create own resume to showcase what you are capable of doing', project_completed: 0},
        {project_id: 3, project_name: 'Practice interview', project_description:'In order to pass the actual interview, you need to be able to explain all the important concepts in programming', project_completed: 0},
        
      ]);
    });
};
