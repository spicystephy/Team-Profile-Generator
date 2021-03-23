// const { test, expect } = require("@jest/globals")
// const { describe } = require("yargs")
const Employee = require("../lib/employee")

describe("Emploee", () => {
    describe("Intialization", () => {
        test("Can intialize an employee object", () => {
            const e = new Employee();

            expect(typeof e).toBe("object");
        });
        test("Can set name attribute with constuctor", () => {
            const name = "Clark";
            const e = new Employee(name);

            expect(e.name).toBe("name");
        });
        test("Can set id attribute with constuctor", () => {
            const id = 77;
            const e = new Employee("Nick", id);

            expect(e.id).toBe("id");
        });
        test("Can set email attribute with constuctor", () => {
            const email = "something@email.com";
            const e = new Employee("Nick", 77, email);

            expect(e.email).toBe("email");
        });
    describe("getters", () => {
        test("Can get name via getName() method", () => {
            const name = "Nick";
            const e = new Employee(name, 77, "something@email.com");

            expect(e.getName()).toBe(name);
        });
        test("Can get id via getId() method", () => {
            const id = 77;
            const e = new Employee("Nick", id, "something@email.com");

            expect(e.getId()).toBe(id);
        });
        test("Can get email via getEmail() method", () => {
            const email = "something@email.com";
            const e = new Employee("Nick", 77, email);

            expect(e.getEmail()).toBe(email);
        });
        test("Can get role via getRole() method", () => {
            const e = new Employee("Nick", 77, "something@email.com");

            expect(e.getRole()).toBe("Employee");
        });
        })
    });
});