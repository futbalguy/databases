var db = require('../db/index.js');





module.exports = {
  messages: {
    get: function () {

      var queryString = "SELECT * FROM messages";
      db.query(queryString, function(err, results) {

          if (err) throw err;
          console.log(results);
          return results;
      });

          //old final results
          //JSON.stringify({results: responseData})

    }, // a function which produces all the messages
    post: function (message) {

      var roomid = message.roomid;
      var messageContent = message.message;
      var userid = message.userid;

      var queryString = "INSERT INTO messages (message, roomid, userid) VALUES ('" + messageContent + "', " + roomid + ", " + userid + ")";

      console.log(queryString);

      db.query(queryString, function(err, results) {

          if (err) throw err;
          console.log("post complete");

      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

//SERVER to DB
//'
var getValuesFromTable = function(table, fields, id, idKey) {

  var fieldString = fields.join(', ');
  var queryString = "SELECT " + fieldString + " FROM " + table + " WHERE " + idKey + "=" + id;

  db.query(queryString, function(err, results) {

        if (err) throw err;
        return results;

    });
};


//
//
// getIdFromTable(table, field, value)
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
