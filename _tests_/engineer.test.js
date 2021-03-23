const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Emploee", () => {
test("Can set GitHub account with constuctor" () => {
    const github = "GHUsername";
    const e = new Engineer(github);

    expect(e.github).toBe("github");
});
test("Can get role via getRole() method" () => {
    const role = "role";
    const e = new Engineer(role);

    expect(e.getRole).toBe(role);
});
test("Can get GitHub via getGitHub() method" () => {
    const github = "GHUsername";
    const e = new Engineer(github);

    expect(e.getGitHub).toBe(github);
})};