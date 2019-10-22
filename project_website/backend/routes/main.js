var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ajou', //자신의 DB 비밀번호로 설정
    database: 'project' //자신의 프로젝트 이름으로 설정
  })
  connection.connect(function (err) {   
    if (err) {     
      console.error('mysql connection error');     
      console.error(err);     
      throw err;   
    } 
  });

  router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM project.culture', function(err, datas, fields) {
        if(!err){
          res.send(datas);
        }
        else
          console.log('Error!!', err);
      });
});

router.get('/:id', function (req, res, next) {
    console.log("sdkfkdkd"+req.params.class)
    var id= parseInt(req.params.id, 10)
    console.log('dsds'+id)
    connection.query('SELECT * FROM project.culture', function(err, print_data, fields) {
        if(!err){
          console.log(print_data);
          res.send(print_data);
        }
        else
          console.log('Error!!', err);
      });
});
module.exports = router;