const Manager = require("../lib/Manager");

describe("Manager", () => {
    test("Can set office number with constuctor", () => {
      const officeNum = "520.123.4567";
      const e = new Manager("Nick", 77, "something@email.com", officeNum);
  
      expect(e.officeNum).toBe(officeNum);
    });
    test("Can get role via getRole() method", () => {
      const e = new Manager("Nick", 77, "something@email.com", "officeNum");
  
      expect(e.getRole()).toBe("Manager");
    });
    test("Can get office number via getOfficeNum() method", () => {
      const officeNum = "520.123.4567";
      const e = new Manager("Nick", 77, "something@email.com", officeNum);
  
      expect(e.getOfficeNum()).toBe(officeNum);
    });
  });