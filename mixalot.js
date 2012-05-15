var express = require('express');

var app = express.createServer();
app.use(express.bodyParser());

app.register('.jade', require('jade'));

function standardizeL(volume, units){
  if ( units == 'gal' ) {
    volume *= 3.785;
  };
  return volume, "L";
}



// magic
var compounds = require('/compounds.json');

app.get('/', function(req, res){
  res.render('index.jade', {compounds: compounds.diy});
});

app.post('/', function(req, res){
  // convert gallons to liters
  console.log(req.body.tank);
  console.log(req.body.dose);
  
  var (volume, units) = standardize(req.body.tank.volume, req.body.tank.units);
});
  
app.listen(process.env.PORT || 8001);


