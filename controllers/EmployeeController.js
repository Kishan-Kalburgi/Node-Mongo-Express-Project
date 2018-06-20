
var Employee = require('../models/Employee')

var employeeController = {};

// Save new employee
employeeController.save = function(req, res) {
    var employee = new Employee(req.body);
    employee.save(function(err) {
        if(err) {
          console.log(err);
          res.render("../views/Register");
        } else {
          console.log("Successfully created an employee.");
          res.redirect("/");
        }
      });
  };

module.exports = employeeController;