//모듈 사용
var express = require('express');
var mongojs = require('mongojs');

//몽고 디비
var db = mongojs('sakey',['member']);

var app = express();

app.listen(3000, function(){
    console.log('Server Running Connected :3000');
});
