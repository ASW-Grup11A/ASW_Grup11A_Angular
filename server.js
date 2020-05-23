const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname + '/dist/Empo-News-Angular'))

app.listen(process.env.PORT || 8081);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/Empo-News-Angular/index.html'));
})

console.log('Compiled successfully');
