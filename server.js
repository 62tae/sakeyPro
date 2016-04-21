//모듈 사용
require('rootpath');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//express 정적파일 사
app.use(express.static(__dirname + '/public'));
//bodyParser 사용
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//engine 사용
app.set('views',__dirname +'/views');
app.set('view engine','ejs');
//HomePage 부분
app.get('/login', function(req,res){
  res.render('login');
});
app.get('/register', function(req,res){
  res.render('register');
});
// 서버 Port 설정
var server = app.listen(3000, function(){
    console.log('Server Running Connected :3000');
});
