var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(8000);
io.on('connection', function (socket) {
  socket.on('demo', function (data) {
    socket.emit('demo', { hello: 'world', data: data });
    });
});