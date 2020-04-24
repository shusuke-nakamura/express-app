var express = require('express');
var ejs = require('ejs');
var app = express();

app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));

app.get('/', (req, res) => {
  // index.ejsをレンダリングする
  var msg = "This is Express Page!<br>" + "これは、スタイルシートを利用した例です。";
  res.render('index.ejs', {
    title: 'Index',
    content: msg,
  });
});

app.listen(3000, () => {
  console.log('Start server port:3000');
});