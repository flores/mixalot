var express = require('express');

var app = express.createServer();
app.use(express.bodyParser());

app.register('.jade', require('jade'));

var compounds = require('./conf/compounds.json');

app.get('/', function(req, res){
  res.render('index.jade', {compounds: compounds.diy});
});

app.post('/', function(req, res){
  console.log('pie!');
  console.log(req.body.tank);
  console.log(req.body.dose);
});
  
app.listen(process.env.PORT || 8001);
