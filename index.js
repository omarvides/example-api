const express = require('express');
const promBundle = require('express-prom-bundle');
const metricsMiddleware = promBundle({ includeMethod: true, includeStatusCode: true, includePath: true });

const app = express();
app.use(metricsMiddleware);

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