const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const x = new Employee();
  expect(typeof x).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Mike";
  const x = new Employee(name);
  expect(x.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const x = new Employee("Emp", testValue);
  expect(x.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const x = new Employee("Emp", 1, testValue);
  expect(x.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Mike";
  const x = new Employee(testValue);
  expect(x.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const x = new Employee("Emp", testValue);
  expect(x.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const x = new Employee("Emp", 1, testValue);
  expect(x.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const x = new Employee("Mike", 1, "test@test.com");
  expect(x.getRole()).toBe(testValue);
});
