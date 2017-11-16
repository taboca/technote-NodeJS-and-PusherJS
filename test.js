var Pusher = require('pusher-js');

var config = require('./config.json');

var socket = new Pusher(config.APP_KEY, {
  authEndpoint: config.authEndpoint,
});

var my_channel = socket.subscribe('private-channel');

socket.bind('client-to-event',
  function(data) {
     console.log(data);
  }
);


