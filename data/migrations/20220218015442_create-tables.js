
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments('project_id')
      tbl.string('project_name').notNullable()
      tbl.string('project_description')
      tbl.integer('project_completed').defaultTo(0)
  })
  .createTable('resources', tbl => {
      tbl.increments('resource_id')
      tbl.string('resource_name').notNullable().unique()
      tbl.string('resource_description')
  })
  .createTable('tasks', tbl => {
      tbl.increments('task_id')
      tbl.string('task_description').notNullable()
      tbl.string('task_notes')
      tbl.boolean('task_completed').defaultTo(false)
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
  })
  .createTable('project_resources', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
      tbl.primary(['project_id', 'resource_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resource')
};
