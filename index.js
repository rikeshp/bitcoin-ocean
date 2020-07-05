const express = require('express')
const app = express()
//const port = process.env.PORT

app.use(express.static('public'));

//app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

//app.get('/websocket.js', (req, res) => res.sendFile(__dirname + '/websocket.js'));


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

