'use strict';

// const num = new Number(3);
// console.log(num);

// const num = new Function(3);
// console.log(num);

// ES5

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hallo ${this.name}`);
    };
}

User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел.`)
};

const max = new User('Max', 35);
const ivan = new User('Ivan', 25);
console.log(max);
console.log(ivan);
console.log(max.name);
console.log(ivan.name);

ivan.hello();
max.hello();

ivan.exit();

// ES6 - на практике используют классы

class User1 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
        hello() {
            console.log(`Hallo ${this.name}`);
        };   
        exit() {
            console.log(`Пользователь ${this.name} ушел.`);
        }     
    }