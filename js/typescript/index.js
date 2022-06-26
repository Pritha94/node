/// let const var
console.log('Let, var,  example');
if (true) {
    var x = 20;
    let y = 30;
}

//console.log(y);// out of scope: error
console.log(x);

const jhon = {
    name: 'JHON'
}

// property value still changed
jhon.name = 'Pritha'
console.log(jhon);

/**************************************/
//temlate-string
console.log('Template letarale example');
const names = 'Jhon';
const greeting = `Hello ${names}.How are you?`
console.log(greeting);
/**************************************/
//default argument
console.log('default argument example');

function greet(message = 'Hello', name = 'world') {
    console.log(`${message} ${name}`);
}

greet();
greet('Helloy', ' world');
greet('Pritha\'s'); //name have default value
greet(undefined, 'Jhon'); // message has default value
/******************************** */
console.log('array-destruction');
const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const temp = day[0];
const [first, second, , , fifth, , seven] = day;
console.log(first, second, fifth, seven);
/********************************* */
//object-destruction
console.log('object-destruction');
const pri = {
    name: 'Pritha',
    age: 28,
    emails: [
        'prithawest@gmail.com',
        'adurebela@gmail.com'
    ],

    address: {
        city: 'Kolkata',
        state: 'West Bengal'
    }
};

// const fName = pri.name,
//     yAge = pri.age,
//     fEmail = pri.emails[0],
//     sEmail = pri.emails[1],
//     city = pri.address.city,
//     state = pri.address.state

// console.log(`My name is ${fName}. I have 2-email id first one is ${fEmail} another is ${sEmail}.Live in ${city} and ${state}`);


const {
    name,
    age,
    address: {
        city,
        state
    },
    emails: [
        firstEmail,
        secondEmail

    ]
} = pri;

console.log(name, age, city, state, firstEmail, secondEmail);

function printAddress({ city, state, country }, { fname, lname }) {
    console.log(`Name of person is ${fname} ${lname}`);
    console.log(`City = ${city}`);
    console.log(`State = ${state}`);
    console.log(`Contry = ${country}`);

}

printAddress({
    city: 'Mind',
    state: 'Magician',
    country: 'India'
}, {
    fname: 'pritha',
    lname: 'dey'
});
/************************************** */
// rest-operator

console.log("rest-operator");

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const [firsts, seconds, ...restOfDays] = days;

console.log(firsts, seconds, restOfDays);


const mum = {
    nam: 'Pritha',
    age: 28,
    emails: [
        'prithawest@gmail.com',
        'adurebela@gmail.com'
    ],

    address: {
        citi: 'Kolkata',
        state: 'West Bengal'
    }
};

const {
    nam,
    address: {
        citi,
        ...restOfAddress
    },
    ...restOfDetails
} = mum;

console.log(nam, citi, restOfAddress, restOfDetails);
/****************************************/

//Arrow function

console.log("arrow function");
//old syntax 1
function sum1(x, y) {
    return x + y;
}
console.log(sum1(12, 31));
//old syntax 2
const sum2 = function(x, y) {
    return x + y;
}
console.log(sum2(12, 13));

//new arrow function
const sum3 = (x, y) => {
    return x + y
}
console.log(sum3(12, 14));
/*************************** */
console.log("spreed operator");
// spread(mainly use to for copying array and object)

const nums1 = [1, 2, 3],
    nums2 = [4, 5, 6];

// spread the array items with commas in between
// const nums1Copy = [ nums1[0], nums1[1], nums1[2] ];
const num1copy = [...nums1];
console.log(num1copy);


const numscombine = [...nums1, ...nums2]; // [ 1, 2, 3, 4, 5, 6 ]
console.log(numscombine);

//console.clear();// clear console

// primitives are copied by value (number, boolean, string)
// non-primitives are copied by reference (objects, arrays)

num1copy[0]++; // changing the first item DOES NOT AFFECT the first item in the original array, i.e. num1

console.log(nums1);
console.log(num1copy);

const persons = [{
        name: 'Pritha',
        age: 28
    },
    {
        name: 'Adure Bela',
        age: 2.5
    },
    {
        name: 'Magician',
        age: 32.5
    }
];

// objects will be copied by reference
const personcopy = [...persons];
console.log(persons);
// The items within persons and personsCopy arrays are the SAME!
personcopy[0].age++ // same as persons[0].age++
    console.log(personcopy);


const pritha = {
    name: 'Pritha', //primitive
    age: 28, // primitive
    email: [ // non-primitive
        'prithawest@gmail.com',
        'adurebela@gmail.com'
    ],
    address: { // non-primitive
        city: 'Kolkata',
        state: 'West Bengal'
    }
};

// primitive properties are copied by value (number, boolean, string) - name, age
// non-primitive properties are copied by reference (objects, arrays) - emails, address
const prithacopy = {
    ...pritha
}

prithacopy.age++;
prithacopy.address.city = 'Calcutta';
prithacopy.email.push('qwerty@gmail.com');
// console.log(pritha);
console.log(prithacopy);


/************************** */
console.log('class');
// parent or base class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    prithaBirthDay() {
        this.age++;
    }
}


//inheritance parent class
class Employee extends Person {
    constructor(name, age, role, dept) {
        super(name, age)

        this.role = role;
        this.dept = dept;
    }

    //override the base class method
    prithaBirthDay() {
        super.prithaBirthDay(); //calling base classs implimentation
        console.log(`Happy Birth Day ${this.name}`);
    }
}

const Prithas = new Employee('Pritha', 18, 'Designer', 'moneranush');
Prithas.prithaBirthDay();
console.log(Prithas);
/******************************/

console.log('promise');
import Person1 from './modules/Person.js';
const axios = require('axios');

const person = new Person1('Pritha', 28);
person.celebrateBirthday();
console.log(person);