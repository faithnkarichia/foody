let liveServer = require("live-server")
let params = {
    port: 8080,
    host: "127.0.0.1",
    file: "home.html"
}
liveServer.start(params)
// nodemon index.js