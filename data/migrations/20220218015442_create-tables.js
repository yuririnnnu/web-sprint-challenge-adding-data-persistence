
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments('project_id')
      tbl.string('project_name', 128).notNullable()
      tbl.string('project_description', 128)
      tbl.integer('project_completed').defaultTo(0)
  })
  .createTable('resources', tbl => {
      tbl.increments('resource_id')
      tbl.string('resource_name',128).notNullable().unique()
      tbl.string('resource_description',128)
  })
  .createTable('tasks', tbl => {
      tbl.increments('task_id')
      tbl.string('task_description',128).notNullable()
      tbl.string('task_notes',128)
      tbl.integer('task_completed').defaultTo(0)
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      // tbl.primary(['task_id', 'project_id'])

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
      // tbl.integer('task_id')
      //   .unsigned()
      //   .notNullable()
      //   .references('task_id')
      //   .inTable('tasks')
      //   .onUpdate('CASCADE')
      //   .onDelete('CASCADE')
      tbl.primary(['project_id', 'resource_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
};
