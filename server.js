require('rootpath')();
var express = require('express');

var app = express();
//express 정적파일
app.set('view engine','ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req,res){
  res.render('login');
});

var server = app.listen(3000, function(){
  console.log('Server listening at http://');
});
