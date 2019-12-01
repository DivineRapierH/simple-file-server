const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const upload = multer({ dest: path.join(__dirname, 'temp') });

app.use(express.static(path.join(__dirname, '/')));

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  next();
});

app.put('/upload', upload.single('file'), (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  res.end('Upload success!');
})

app.listen(6666);
