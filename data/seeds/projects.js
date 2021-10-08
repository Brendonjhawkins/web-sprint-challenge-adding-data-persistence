const { clean } = require("knex-cleaner");

exports.seed = function(knex) {
    return clean(knex, 
      {project_name: 'Titan'},
      {project_name: 'Apex'},
      {project_name: 'Phoenix'})
  };

