// default export
/*export default */
class PersonCopy {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

// export default Person;

// named export
const NATIONALITY = 'Indian';
const DEFAULT_AGE = 18;

export {
    PersonCopy as
    default,
    NATIONALITY
}