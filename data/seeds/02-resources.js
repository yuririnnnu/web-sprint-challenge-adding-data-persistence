
exports.seed = function(knex) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        {resource_id: 1, resource_name: 'LeetCode', resource_description:'practice programming'},
        {resource_id: 2, resource_name: 'Pramp', resource_description:'practice getting interviews online'},
        {resource_id: 3, resource_name: 'BloomTech', resource_description:'get your resume review by teacher'},
      ]);
    });
};
