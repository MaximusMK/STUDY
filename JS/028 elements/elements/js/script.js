'use strict';

const box = document.getElementById('box');
console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns);

// const btns = document.getElementsByTagName('button')[1];
// console.log(btns);

// const btns = document.getElementsByTagName('button');
// console.log(btns[1]);

// const circlas = document.getElementsByClassName('circle');
// console.log(circlas);

// более современные методы

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
} );

const oneHeart = document.querySelector('.heart');
    console.log(oneHeart);

    const oneDiv = document.querySelector('div');
    console.log(oneDiv);

    //https://learn.javascript.ru/css-selectors