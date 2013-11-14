var _ = require('underscore');
var herit = require('herit');

module.exports = herit({
  constructor: function (options) { _.extend(this, options); },

  run: function (options, cb) { cb(); },

  asExpressController: function (req, res, next) {
    var options = _.extend({}, req.headers, req.params, req.query, req.body);
    this.run(options, function (er, val) { er ? next(er) : res.send(val); });
  }
});
