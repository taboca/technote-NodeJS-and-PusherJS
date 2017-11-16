var Pusher     = require('pusher');
var express    = require('express');
var bodyParser = require('body-parser');
var config     = require('config.json');

var pusher = new Pusher({
  appId   : config.APP_ID,
  key     : config.APP_KEY,
  secret  : config.SECRET,
  cluster : config.cluster
});


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/pusher/auth', function(req, res) {
  var socketId = req.body.socket_id;
  var channel  = req.body.channel_name;
  var auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

var port = process.env.PORT || 5000;
app.listen(port);


