var express = require('express');

var router = express.Router();
const multer = require('multer');
var ps = require('python-shell');
var mysql = require('mysql')
var classnum = -1;

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


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/upload', express.static('upload'));

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


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/');
  },
  filename: (req, file, cb) => {
    //console.log(file)
    cb(null, file.originalname);
  }
});


const upload = multer({
  storage: storage
})

router.post('/', upload.single("myfile"), function(req, res, next){
  let name = req.file.filename;
  console.log(name);
    var options = {
        mode: 'text',
        pythonPath: '',
        pythonOptions: ['-u'],
        scriptPath: '',
        args: [name]
    };
    console.log("222222222");
    ps.PythonShell.run('test.py', options, function (err, results) {
      console.log("3333333");
      if (err) throw err;
      console.log('finished');
      console.log(results[1]);
      console.log(results[2]);
      classnum = String(parseInt(results[2])+1);
      console.log(classnum);
      });
})

router.get('/:id', function (req, res, next) {
  console.log("sdfkjsdlfkdlskfdf")
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


/*
router.post('/', (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.log("eeeeeeeeeeeerrrrrrrrrr");
      console.log(err);
    }
  });
    var value1 = req.body;
    console.log(value1);
    console.log("22222");
   */ 
    /*
    var value1 = 'KakaoTalk_20191018_170907351.jpg'
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
    */

module.exports = router;
