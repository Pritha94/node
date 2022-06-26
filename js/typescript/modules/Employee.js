import Human, { NATIONALITY, DEFAULTAGE } from './Person.js';
class Employee extends Human {
    constructor(name, age, role, dept) {
            super(name, age);
            this.role = role;
            this.dept = dept;
        }
        //override the class
    celebrateBirthday() {
        super.celebrateBirthday(); //call the base class or parent class implimentation
        console.log(`Happy birthday ${this.name}!`);
        console.log(`I'm ${NATIONALITY}`);
        console.log(`The Default age is Sweet ${DEFAULTAGE}`);
    }
}


export {
    Employee as
    default
};