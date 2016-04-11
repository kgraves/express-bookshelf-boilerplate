var config = require('config');

// create database connection
var knex = require('knex')(config.database);
var bookshelf = require('bookshelf')(knex);

// helps avoid circular dependency issues
// see: https://github.com/tgriesser/bookshelf/wiki/Plugin:-Model-Registry
bookshelf.plugin('registry');

module.exports = bookshelf;
