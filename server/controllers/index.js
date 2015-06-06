var models = require('../models');
var bluebird = require('bluebird');



module.exports = {

  messages: {
    get: function (req, res) {
        console.log("test")
      var cb = function(results) {
        results = JSON.stringify(results);
        //res.set(defaultCorsHeaders);
        //

       var headers = defaultCorsHeaders;
       headers['Content-Type'] = "application/json";
       res.writeHead(200, headers);

        res.end(results);
      };

      models.messages.get(cb);

  },

 // a function which handles a get request for all messages
    post: function (req, res) {},
    options: function(req, res) {

      var headers = defaultCorsHeaders;
       headers['Content-Type'] = "application/json";
       res.writeHead(200, headers);
      res.end();
    }
}, // a function which handles posting a message to the database

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {},
    options: function(req, res) {

      var headers = defaultCorsHeaders;
       headers['Content-Type'] = "application/json";
       res.writeHead(200, headers);
      res.end();
    }
  }
};

//CLIENT TO SERVER
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};
