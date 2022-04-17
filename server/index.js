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
    server.on("error", (e) => {
        res.send(e);
    })
    server.end = function() {
        res.end();
    }
    server.onmessage = function(e) {
        res.write(e.data + "\n");
    }
    server.onopen = function() {
        eval(req.body.messages).forEach(function(e, i) {
            if (req.body.timeout) {
                setTimeout(function() {
                    if (typeof e == "string") {
                        server.send(e);
                    }
                    if (i == eval(req.body.messages).length - 1) {
                        setTimeout(function() {
                            server.end();
                            server.terminate();
                        }, parseInt(req.body.endAfter) || parseInt(req.body.timeout) || 100)
                    }
                }, parseInt(req.body.timeout) * i);
            } else {
                if (typeof e == "string") {
                    server.send(e);
                }
                if (i == eval(req.body.messages).length - 1) {

                    if (req.body.endAfter) {
                        setTimeout(function() {
                            server.end()
                            server.terminate();
                        }, parseInt(req.body.endAfter))
                    } else {
                        setTimeout(function() {
                            server.end()
                            server.terminate();
                        }, 100)
                    }
                }
            }
        })
    }
})

app.listen(3000, () => {
    console.log('server started');
});
