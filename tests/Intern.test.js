const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UofU";
  const x = new Intern("Emp", 1, "test@test.com", testValue);
  expect(x.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const x = new Intern("Emp", 1, "test@test.com", "UofU");
  expect(x.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UofU";
  const x = new Intern("Emp", 1, "test@test.com", testValue);
  expect(x.getSchool()).toBe(testValue);
});
