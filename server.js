//모듈 사용
var express = require('express');

var app = express();

//express 정적파일 사
app.use(express.static(__dirname + '/public'));
//engine 사용
app.set('views',__dirname +'/views');
app.set('view engine','ejs');
//HomePage 부분
app.get('/', function(req,res){
  res.render('join');
});

app.listen(3000, function(){
    console.log('Server Running Connected :3000');
});
