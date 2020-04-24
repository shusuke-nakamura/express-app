var express = require('express');
var ejs = require('ejs');
var app = express();

app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));

// ※ トップページ
app.get('/', (req, res) => {
  // index.ejsをレンダリングする
  var msg = "This is Express Page!<br>" + "これは、スタイルシートを利用した例です。";
  res.render('index.ejs', {
    title: 'Index',
    content: msg,
    link:{href: '/other', text: '※別のページへ移動'},
  });
});

// ※ otherページ
app.get('/other', (req, res) => {
  var msg = "This is Other Page!<br>" + "これは、用意された別のページです。";
  res.render('index.ejs', {
    title: 'Other',
    content: msg,
    link: {href: '/', text: '※トップに戻る'},
  });
});

app.listen(3000, () => {
  console.log('Start server port:3000');
});