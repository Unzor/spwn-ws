var {
    WebSocket
} = require('ws');

const express = require('express');

const app = express();

app.use(express.json());

app.get("/", function(req, res) {
    res.send("e");
});

app.post("/ws", function(req, res) {
    var server = new WebSocket(req.body.url);
    server.onmessage = function(e) {
        res.write(e.data + "\n");
        server.end = function() {
            res.end();
        }
    }
    server.onopen = function() {
        eval(req.body.messages).forEach(function(e, i) {
            if (req.body.timeout) {
                setTimeout(function() {
                    server.send(e);
                    console.log(i);
                    if (i == eval(req.body.messages).length - 1) {
                        setTimeout(function() {
                            server.end();
                        }, parseInt(req.body.timeout))
                    }
                }, parseInt(req.body.timeout) * i);
            } else {
                server.send(e);
                console.log(i);
                if (i == eval(req.body.messages).length - 1) {
                    server.send(eval(req.body.messages)[eval(req.body.messages).length]);
                    server.end()
                }
            }
        })
    }
})

app.listen(3000, () => {
    console.log('server started');
});
