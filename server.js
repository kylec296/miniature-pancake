var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = __dirname + '/views/';


app.get('/', function(req, res){
res.sendFile(path + '/index.html');
});

app.get('/kylesPage', function(req, res){
res.sendFile(path + '/kylesPage.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});