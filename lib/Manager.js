// Write code to define the Manager class. All classes inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, OfficeNumber) {
    super(name, id, email);
    this.officeNumber = OfficeNumber;
    this.getOfficeNumber = function () {
      return this.officeNumber;
    };
    this.getRole = function () {
      return "Manager";
    };
  }
}
//Always export
module.exports = Manager;
