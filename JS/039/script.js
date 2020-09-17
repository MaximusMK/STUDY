// const timerId = setTimeout(function() {
//     console.log('Hello'); 
// }, 3000);

// const timerId = setTimeout(function(text) {
//     console.log(text); 
// }, 3000, 'Hello');

// const timerId = setTimeout(logger, 3000);
// function logger () {
//     console.log('Hello'); 
// }

// setTimeout(logger, 3000);
// function logger () {
//     console.log('Hello'); 
// }

// const timerId = setTimeout(logger, 3000);
// clearInterval(timerId);
// function logger () {
//     console.log('Hello'); 
// }

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 3000);
//     timerId = setInterval(logger, 500);

// });

// function logger () {
//     if(i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text'); 
//     i++;
// }

// let id = setTimeout( function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

    function myAnimation() {
        const elem = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(frame, 100);
        function frame() {
            if(pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }
    }

    btn.addEventListener('click', myAnimation());