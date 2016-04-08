var helpers = {};

// development error handler; will print stacktrace
helpers.devErrorHandler = function (err, req, res, next) {
  res.status(err.status || 500);

  if (req.is('json')) {
    res.json({
      data: {},
      error: err
    });
  } else {
    res.render('error', {
      message: err.message,
      error: err
    });
  }
};

// production error handler (500 errors)
// no stacktraces leaked to user
// TODO custom 500 page
helpers.errorHandler = function(err, req, res, next) {
  res.status(err.status || 500);

  if (req.is('json')) {
    res.json({
      message: 'failure',
      error: {
        name: err.name,
        message: err.message
      }
    });
  } else {
    res.render('error', {
      message: 'failure',
      error: {
        name: err.name,
        message: err.message
      }
    });
  }
};

// catch 404 and forward to error handler
// TODO custom 404 page
helpers.notFoundHandler = function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
};

/**
 * Redirects to login route.
 *
 * @param {Object} req An express request object
 * @param {Object} res An express response object
 * @param {Function} next A express middleware next function
 */
helpers.redirectToLogin = function(req, res, next) {
  res.redirect('/login');
};

module.exports = helpers;
