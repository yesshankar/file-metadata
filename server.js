'use strict';

var express = require('express');
var cors = require('cors');
const upload = require('multer')();

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  if(req.file){
    res.json({
      "name": req.file.originalname,
      "type": req.file.mimetype,
      "size": req.file.size
    });
  }else{
    res.json(["File not selected!!, Please choose file and click upload."]);
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ... at port 3000');
});
