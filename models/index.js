var config = require('config');

// create database connection
var knex = require('knex')(config.database);
var bookshelf = require('bookshelf')(knex);

// add an entry in this object for each db model
module.exports = {
  bookshelf: bookshelf,
  knex: knex,
  models: {
    // TODO
  }
};
