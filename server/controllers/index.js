var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {

    var handleGet = function(request, roomName){
  if (!roomName) return storage
  else{
    roomName = _.unescape(roomName);
    var roomResults = [];
    for (var i=0; i<storage.length; i++){
      if(storage[i].roomname === roomName){
        roomResults.push(storage[i]);
      }
    }
    return roomResults;
  }


};




    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

//CLIENT TO SERVER
