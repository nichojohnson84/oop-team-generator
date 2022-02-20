//Write code to define the main Employee class.  Others will inherit from here.
function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.getName = function () {
    return this.name;
  };
  this.getId = function () {
    return this.id;
  };
  this.getEmail = function () {
    return this.email;
  };
  this.getRole = function () {
    return "Employee";
  };
}
//Remember to export
module.exports = Employee;
