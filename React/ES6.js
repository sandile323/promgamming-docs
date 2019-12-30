//Vanilla Javasscript

function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

const jeff = new User("Jeff", 35, "sandilehc@gmail.com");

console.log(jeff.name);

//ES6

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email
    }
    increaseAge()
    {
        this.age *= 2;
    }

}

const moses = new User ("Moses", 29, "sandilehc@gmal.com")

moses.increaseAge();

console.log(moses.age)