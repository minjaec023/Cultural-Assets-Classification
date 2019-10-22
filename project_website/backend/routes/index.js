var express = require('express');
var router = express.Router();
const multer = require('multer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/upload', express.static('upload'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage
}).single('myfile');

router.post('/', (req, res) => {
  upload(req, res, err => {
    if (err) console.log(err);
  });
  console.log("1");
    
    var id = req.body.id;
    console.log("2");
    console.log(id);
    var value1 = req.files[0].filename;
    console.log("3");
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
})

module.exports = router;
