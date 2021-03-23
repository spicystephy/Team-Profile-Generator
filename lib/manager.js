const Employee = require("./Employee");

class Manager extends Employee{
    constructor (name, id, email, officeNum){
        //inherited from employee
        super(name, id, email);
        //add office number
        this.officeNum = officeNum;
    }
    //not part of requirements?
    getOfficeNum(){
        return this.officeNum;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;