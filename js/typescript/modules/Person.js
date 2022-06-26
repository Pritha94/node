class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    celebrateBirthday() {
        this.age++;
    }
}
const NATIONALITY = "Indian";
const DEFAULTAGE = 18;
export {
    Person as
    default, NATIONALITY, DEFAULTAGE
}