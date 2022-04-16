# spwn-ws
WebSocket for SPWN.

# Usage
```
let websocket = import spwn_ws
websocket(websocket server URL here, {
messages: [array of messages to send here],
timeout: milliseconds before sending next message (optional)
})
```
An example of usage:
```
let websocket = import spwn_ws
$.print(websocket("wss://ws-test.seven7four4.repl.co/", {
messages: ["Hel", "lo", "World!"],
timeout: 100
}))
```

# Setup
```
git clone https://github.com/Unzor/spwn-ws
touch balls.spwn
```
(write some spwn shit)
```
spwn build spwnshit.spwn -l --allow http_request
```
