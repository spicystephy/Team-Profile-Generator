const Intern = require("../lib/Intern");

describe("Intern", () => {
    test("Can set school with constuctor", () => {
      const school = "college";
      const e = new Intern("Nick", 77, "something@email.com", school);
  
      expect(e.school).toBe(school);
    });
    test("Can get role via getRole() method", () => {
      const e = new Intern("Nick", 77, "something@email.com", "school");
  
      expect(e.getRole()).toBe("Intern");
    });
    test("Can get school via getSchool() method", () => {
      const school = "college";
      const e = new Intern("Nick", 77, "something@email.com", school);
  
      expect(e.getSchool()).toBe(school);
    });
  });