var db = require('../db/index.js');





module.exports = {
  messages: {
    get: function (cb) {

      var queryString = "SELECT messages.*, users.* FROM messages INNER JOIN users ON messages.userid=users.userid";
      db.query(queryString, function(err, results) {

          if (err) throw err;



          console.log(results);
          if (cb) cb(results);
      });

          //old final results
          //JSON.stringify({results: responseData})

    }, // a function which produces all the messages
    post: function (message, cb) {

      var roomid = message.roomid;
      var messageContent = message.message;
      var userid = message.userid;

      var queryString = "INSERT INTO messages (message, roomid, userid) VALUES ('" + messageContent + "', " + roomid + ", " + userid + ")";

      console.log(queryString);

      db.query(queryString, function(err, results) {

          if (err) throw err;
          console.log("message post complete");
          if (cb) cb(results);
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, cb) {

      var queryString = "INSERT INTO users (username) VALUES ('" + username + "')" ;

      console.log(queryString);

      db.query(queryString, function(err, results) {

        if (err) throw err;
        console.log("user post complete");
        if (cb) cb(results);

      });

    },

    rooms: {
      get: function(cb) {

        var queryString = "SELECT * FROM rooms";
        db.query(queryString, function(err, results) {

          if (err) throw err;
          console.log(results);
          if (cb) cb(results)
      });

      },
      post: function(roomname, cb) {

        var queryString = "INSERT INTO rooms (roomname) VALUES ('" + roomname + "')" ;

        console.log(queryString);
        db.query(queryString, function(err, results) {

          if (err) throw err;
          console.log("room post complete");
          if (cb) cb(results);

      });

      }
    }

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
