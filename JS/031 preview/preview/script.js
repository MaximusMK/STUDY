const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// };

// btn.addEventListener('click', () => {
//     alert('click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

// btn.addEventListener('mouseenter', () => {
//    console.log('Hover');
// });

// btn.addEventListener('click', (event) => {
//     console.log(event.target);
//     event.target.remove();
//     console.log('Hover');
//  });

// let i = 0;
// const deleteElement = (event) => {
// 	console.log(event.target);
// 	i++;
// 	if (i = 1) {
// 		btn.removeEventListener('click', deleteElement);
// 	}
// };

// btn.addEventListener('click', deleteElement);

// // let i = 0;
// const deleteElement = (event) => {
//     console.log(event.currentTarget); 
//     console.log(event.type);    
// 	// i++;
// 	// if (i = 1) {
// 	// 	btn.removeEventListener('click', deleteElement);
// 	// }
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(event.target);
// })

// let i = 0;

// const btns = document.querySelectorAll('button')

// const deleteElement = (event) => {
//     console.log(event.target); 
//     console.log(event.type);    
// 	// i++;
// 	// if (i = 1) {
// 		// btn.removeEventListener('click', deleteElement);
// 	// }
// };
 
// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement)

// }); 
const btns = document.querySelectorAll('button')

const deleteElement = (event) => {
    console.log(event.target); 
    console.log(event.type);    
	// i++;
	// if (i = 1) {
		// btn.removeEventListener('click', deleteElement);
	// }
};
 
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true})

}); 