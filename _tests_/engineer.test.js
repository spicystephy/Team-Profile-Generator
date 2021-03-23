// const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  test("Can set GitHub account with constuctor", () => {
    const github = "GHUsername";
    const e = new Engineer("Nick", 77, "something@email.com", github);

    expect(e.github).toBe(github);
  });
  test("Can get role via getRole() method", () => {
    const e = new Engineer("Nick", 77, "something@email.com", "github");

    expect(e.getRole()).toBe("Engineer");
  });
  test("Can get GitHub via getGitHub() method", () => {
    const github = "GHUsername";
    const e = new Engineer("Nick", 77, "something@email.com", github);

    expect(e.getGithub()).toBe(github);
  });
});