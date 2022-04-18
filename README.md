# spwn-ws
WebSocket for SPWN.

# Usage
```
let websocket = import spwn_ws

websocket(websocket server URL here, {
  messages: [array of messages to send here],
  timeout: milliseconds before sending next message (optional, defaults to 100ms),
  endAfter: milliseconds to wait after last message to end connection (optional, defaults to timeout, if none defaults to 100ms)
})
```
An example of usage:
```
let websocket = import spwn_ws

$.print(websocket("wss://ws-test.seven7four4.repl.co/", {
  messages: ["Hel", "lo", "World!"],
  timeout: 100,
  endAfter: 2000
}))
```

# Setup
```
sghtt
---->install
------>spwn_ws
```
To get SPGHTT, click [here.](https://github.com/Unzor/SPGHTT/releases/download/v1.0/spghtt-setup.exe)
