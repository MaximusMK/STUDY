'use strict';

// 1) Обычная функция: this = window,  но если 'use strict' активен, то - undefined.

// function showThis() {
//     console.log(this);
// }
// showThis();

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         // return this.a + this.b;  не работает, выводит undefined
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

//2) контекст у методов объекта - сам объект.

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this)
//     }
// }
// obj.sum();

//3) this в конструкторах и классах это новый экземпляр объекта.

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello" + this.name);
//     };
// }
// let ivan = new User('Ivan', 25);


//4) ручная привязка this: call, apply, bind.

// function sayName() {
//     console.log(this);
//     console.log(this.name);
// }

// const user = {
//     name: "John",
// };

// sayName.call(user);
// sayName.apply(user);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: "John",
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));

//////////////////////////////////

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this);
//     // this.style.backgroundColor = 'red';
// });

const obj = {
    num: 5,
    sayNumber: function()  {
        const say = () => {
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();

const double = a => a * 2; // () если один аргумент и return подставятся автоматически
console.log(double(4));