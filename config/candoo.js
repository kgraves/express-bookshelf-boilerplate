var NOT_AUTHORIZED_TEXT = 'You are not authorized for this action';

module.exports = {

  'view.*': function(req, done) {
    var isAuthorized = true; // TODO

    done(isAuthorized, NOT_AUTHORIZED_TEXT);
  },

};
