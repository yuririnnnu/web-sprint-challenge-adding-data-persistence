
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id: 1, project_name: 'Learn endpoints', project_description:'Get basic knowledge of creating endpoints to be a full stack developer', project_completed: true},
        {project_id: 2, project_name: 'Create resume', project_description:'Create own resume to showcase what you are capable of doing', project_completed: false},
        {project_id: 3, project_name: 'Practice interview', project_description:'In order to pass the actual interview, you need to be able to explain all the important concepts in programming', project_completed: false},
        
      ]);
    });
};
