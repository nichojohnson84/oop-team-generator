// Write code to define the Intern class.  Make sure to inherit from Employee
const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, School) {
    super(name, id, email);
    this.school = School;
    this.getSchool = function () {
      return this.school;
    };
    this.getRole = function () {
      return "Intern";
    };
  }
}
//Export Intern
module.exports = Intern;
