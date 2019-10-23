var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var ps = require('python-shell')

classnum = 0;
router.use('/upload', express.static('upload'));

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
/*
  var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'upload/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
  });

  const upload = multer({
    storage: storage
  }).single('myfile');
  
*/
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM project.culture', function(err, datas, fields) {
        if(!err){
          res.send(datas);
          //console.log(datas);
        }
        else
          console.log('Error!!', err);
      });
});
/*
router.post('/', (req,res) => {
  console.log("skjdfkjskfjlsdfsdf");
  upload(req, res, err => {
    if(err) console.log(err);
  });
  var id = req.body.id;
  console.log(id);
  var value1 = req.files[0].filename;
  console.log(value1);
  var classnum = -1;
  var options = {
      mode: 'text',
      pythonPath: '',
      pythonOptions: ['-u'],
      scriptPath: '',
      args: [value1]
  };
  ps.PythonShell.run('test.py', options, function (err, results) {
  if (err) throw err;
  console.log('finished');
  console.log(results[1]);
  console.log(results[2]);
  classnum = results[2];
  });
});
*/
/*
router.get('/:id', function (req, res, next) {
    //console.log("sdfkjsdlfkdlskfdf")
    //var id= parseInt(req.params.id, 10)
    //console.log('dsds'+id)
    connection.query('SELECT * FROM project.culture where class="'+classnum+'"', function(err, print_data, fields) {
        if(!err){
          console.log(print_data);
          res.send(print_data);
        }
        else
          console.log('Error!!', err);
      });
});
*/


module.exports = router;