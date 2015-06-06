var db = require('../db/index.js');





module.exports = {
  messages: {
    get: function (cb) {

      var queryString = "SELECT messages.*, users.* FROM messages INNER JOIN users ON messages.userid=users.userid";
      db.query(queryString, function(err, results) {

          if (err) throw err;
          if (cb) cb(results);
      });

          //old final results
          //JSON.stringify({results: responseData})

    }, // a function which produces all the messages
    post: function (message, cb) {

      var messageContent = message.message;
      var username = message.username;
      var roomname = message.roomname;

      //roomname = (roomname != '') ? roomname : 'NULL'

      getIdFromTable('users','username',username,'userid', function(userid) {

        getIdFromTable('rooms','roomname',roomname,'roomid', function(roomid) {

          roomid = (roomid) ? roomid : 'NULL'

          var queryString = "INSERT INTO messages (message, roomid, userid) VALUES ('" + messageContent + "', " + roomid + ", " + userid + ")";

          db.query(queryString, function(err, results) {

              if (err) throw err;
              console.log("message post complete");
              if (cb) cb(results);
          });
        });
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
var getValuesFromTable = function(table, fields, id, idKey, cb) {

  var fieldString = fields.join(', ');
  var queryString = "SELECT " + fieldString + " FROM " + table + " WHERE " + idKey + "=" + id;

  db.query(queryString, function(err, results) {

        if (err) throw err;
        cb(results);

    });
};


//
//
getIdFromTable = function(table, field, value, idKey, cb) {

  var queryString = "SELECT " + idKey + " FROM " + table + " WHERE " + field + "=" + "'" + value + "'";
  db.query(queryString, function(err, results) {

        if (err) throw err;
        if (results && results[0] && results[0][idKey]) {
          cb(results[0][idKey]);
        } else {
          cb(undefined)
        }


    });
}








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
