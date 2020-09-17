		//ПОРЯДОК КОНСПЕКТА ПО КАНТОРу

		//Коментарий:
	// закоментированая строка
	/* Закомментированые несколько
	строк
	*/

// Переменная и константа:
	let message;
	const massage:
		// пример переменной с инициализацией:
	let message = "age";
		//пример константы:
	const BIRTHDAY = "10.10.2010";
	const age = 25;

//типы данных
	let number = 5;
	let bigint = 6n;
	let string = "some txt";
	let boolean = true
	let someVariable = null; //для неизвестных значений – отдельный тип, имеющий одно значение null
	let someVariable = undefined //для неприсвоенных значений – отдельный тип, имеющий одно значение undefined
	let object  = someObgerct;
	let id = Symbol();
	let id = Symbol("id"); //сиввол с именем
		//Символы гарантированно уникальны. 
	let id1 = Symbol("id");
	let id2 = Symbol("id");
	alert(id1 == id2); // false
	Infinity //представляет собой математическую бесконечность
	Nan //означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции, например: 
	alert( "не число" / 2 ); // NaN

//преобразование типов
	//https://habr.com/ru/company/ruvds/blog/347866/ - подробно описано
	// https://dorey.github.io/JavaScript-Equality-Table/
	//неявное преобразование типов 
	// пример явногопреобразования 
	let value = true;
	alert(typeof value); // boolean
	value = String(value); // теперь value это строка "true"
	alert(typeof value); // string

//сокращенный оператор присваивания
		let n = 2;
		n = n + 2;  n += 2;
// условные операторы
	if(a > b) {
		alert("");
	}
// else if
	if(a > b) {
		alert("1");
	} else {
		alert("2")
	}
// условный оператор
	let accessAllowed = a > b ? alert("1") : alert("2"); // не читабельно

// приоритет оператора && больше, чем у ||
// while
let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;
}
// do while
do {
  alert( i );
} while (i < 3); // выполнится хотябы один раз

//for
for (i = 0; i < 5; i++){
	alert(i);
}

// break, continue  https://learn.javascript.ru/while-for
// switch
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}

// FUNCTION DECLARATION
// объявление
	function showMessage() {
	  alert('Всем привет!');
	}
//вызов
	showMessage();
// возврат значения
	function sum(a, b) {
	  return a + b;
	}
	let result = sum(1, 2);
	alert( result );
//Возможно использовать return и без значения. Это приведёт к немедленному выходу из функции.
// FUNCTION EXPRESSION
	let showMessage = function(){
		alert('Всем привет!');
	}; //ставить ";"
// Разница между DECLARATION и EXPRESSION

// 1. Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться, а
// Function Declaration можно использовать во всем скрипте (или блоке кода, если функция объявлена в блоке)
// 2. В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него.

//FUNCTION-CALLBACK
	function ask(question, yes, no) {
	  if (confirm(question)) yes()
	  else no();
	}
	function showOk() {
	  alert( "Вы согласны." );
	}
	function showCancel() {
	  alert( "Вы отменили выполнение." );
	}
	ask("Вы согласны?", showOk, showCancel); // использование: функции showOk, showCancel передаются в качестве аргументов ask
//ARROW FUNCTION
	// Стрелочные функции анонимны
	let sum = (a, b) => a + b;  
	//let sum = (a, b) => return a + b;  return можно опустить если тело функции не находится в блоке {}

	let sum = function(a, b) {
		return a + b;
	}
!!! Вернутся когда дойду до this !!!
// У стрелочных функций нет «this» //https://learn.javascript.ru/arrow-functions#u-strelochnyh-funktsiy-net-this
//ПОЛИФИЛ - это код, реализующий какую-либо функциональность, которая не поддерживается в некоторых версиях веб-браузеров.
//OBJECT
	let user = new Object(); // синтаксис "конструктор объекта"
	let user = {}; 			 // синтаксис "литерал объекта"
//пример
	let user = {
		name: "Jhon",
		"second name": "Smith", //доступ к объекту через "." не работает, необходимо так: user["second name"]
		age: 25,
	};
// доступ к свойству через переменную также через []
	let user = {
	  name: "John",
	  age: 30
	};
	let key = prompt("Что вы хотите узнать о пользователе?", "name");
	let key2 = prompt("Что вы хотите узнать о пользователе?", "age");

	// доступ к свойству через переменную
	alert( user[key] ); // John (если ввели "name")
	alert( user[key2] ); // 30 (если ввели "age")
// оператор in
	let user = {
	 age: 30,
	 };
	let key = "age";
	alert( key in user ); //true
//for...in
	let user = {
	  name: "John",
	  age: 30,
	  isAdmin: true
	};

	for (let key in user) {
	  alert( key );  // name, age, isAdmin
	  alert( user[key] ); // John, 30, true
	}	
// другой способ 
	let clone = Object.assign({}, user);



!!!//THIS and BIND and other
