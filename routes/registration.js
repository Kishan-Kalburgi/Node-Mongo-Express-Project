

var express = require('express');


var router = express.Router();

var employeeControllerObj = require("../controllers/EmployeeController.js");


router.get('/', function(req, res, next) {
  res.render('Register', { title: 'Register here' });
  //res.send("Hai");
});

// Save employee
router.post('/save', function(req, res) {
    //res.send("routes users page");
    //res.redirect("/");
    console.log("req.body value check, (body-parser check)" + req.body);
    employeeControllerObj.save(req, res);
  });

module.exports = router;