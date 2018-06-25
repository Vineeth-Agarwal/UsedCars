var express = require('express');
var router = express.Router();
var Car = require("../model/cars")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// save user
router.post('/saveCar', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide car details" })
  }
  var carObj = new Car(req.body);
  carObj.save(function(err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err : err })
    }
    else {
      res.status(200).json({ msg: "car record saved successfully", data : data})
    }
  });
})
// get cars List
router.get('/getCarList', function (req, res, next) {
Car.find({},function(err,results){
  if (err) {
    res.status(403).json({ msg: "something bad", err })
  }
  else {
    res.status(200).json({ msg: "car record fetched successfully",data:results })
  }
})
});

//last car record
router.get('/getCarLast',
function (req,
res, next) {
Car.find({},function(err,results){
var lastRecord
// console.log(results.length);
if(results.length>0)
{
lastRecord=results[results.length-1]
}
if (err) {
res.status(403).json({
msg: "something bad",
err })
}
else {
res.status(200).json({
msg: "Car record fetched successfully",data:lastRecord })
}
})
});

module.exports = router;
