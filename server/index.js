var { WebSocket } = require('ws');

const express = require('express');

const app = express();

app.use(express.json());

app.get("/", function(req, res){
  res.send("e");
});

app.post("/ws", function(req, res){
  var server = new WebSocket(req.body.url);
  server.onmessage = function(e) {
    res.send(e.data);
  }
  server.onopen = function() {
  server.send(req.body.message);
  }
})

app.listen(3000, () => {
  console.log('server started');
});
