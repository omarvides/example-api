const express = require('express');

const app = express();

app.set('port', 3000);

app.get('/', function onGetRoot(req, res) {
  return res.send('Hello');
});

app.post('/', function onPostRoot(req, res) {
  return res.send('Hello from post');
})

app.listen(app.get('port') || process.env.PORT, function onListen() {
  console.log(`App is listening on port ${app.get('port')}`);
});

module.exports = app;