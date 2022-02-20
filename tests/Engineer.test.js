const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const x = new Engineer("Emp", 1, "test@test.com", testValue);
  expect(x.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const x = new Engineer("Emp", 1, "test@test.com", "GitHubUser");
  expect(x.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const x = new Engineer("Emp", 1, "test@test.com", testValue);
  expect(x.getGithub()).toBe(testValue);
});
