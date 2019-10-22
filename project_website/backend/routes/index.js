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
})

module.exports = router;
