var express = require('express');
var router = express.Router();

// require all controllers here
//
// NOTE If you create a new controller, you must add a reference here for it to
// be included in the app
//
// TODO write logic to programmatically include all controllers
var home = require('./home');

router.use('/', home);

module.exports = router;
