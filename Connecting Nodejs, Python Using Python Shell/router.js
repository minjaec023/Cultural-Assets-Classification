var express = require('express');
var router = express.Router();
var multer = require('multer');
var app = express();
var srcArray = new Array();
var idArray = new Array();

var ps = require('python-shell');
value1 = 'Former Seoul Station Building_6.jpg'

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

var upload = multer({storage: storage});

router.route('/').get(function(req, res){
    res.render('post.html');
});

//router.route('/Check').get(function(req,res){
//    console.log(srcArray);
//    console.log(idArray);
//    res.render('imagelist.html', {src:srcArray, id:idArray});
//});

router.route('/Check/Class').post(upload.array('photo', 1), function(req,res){
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
    res.render('Class확인.html', {classnum:classnum});
    });
});

//router.route('/Check/id').post(upload.array('photo', 1), function(req,res){
//    var files = req.files;
//    var id = req.body.id;
//    var src = "../" + req.files[0].destination + req.files[0].filename;
//    srcArray.push(src);
//    idArray.push(id);
//    res.render('result.html', {src:src, id:id});
//});

module.exports = router;