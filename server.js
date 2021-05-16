'use strict';

const express = require('express');

// Constants
const PORT = 8092;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

process.on('SIGINT', function onSigint() {
  // 在node server时, 按下ctrl+c
  console.log('x');
  app.shutdown();
});
process.on('SIGTERM', function onSigint() {
  // 在docker中运行时, docker stop
  console.log('y');
  app.shutdown();
});
app.shutdown = function() {
  console.log('exit...');
  process.exit();
};
