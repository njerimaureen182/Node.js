// function sayHello() {
// 	console.log('hello my name is Maureen')
// }

// function sayAge() {
// 	console.log('I am 25 years old')
// }

// function sayAll() {
// 	sayHello();
// 	sayAge();
// }
// sayAll();

// console.log('final')

// 2. IIFE(Immediately Invoked Function Expression)
// (function() {
// 	console.log('hey');
// }());
// console.log('final');

// SCOPES
// a. GLOBAL SCOPE
// const name = "Maureen";
// const age = 24;

// console.log(name);

// function sayName() {
// 	console.log(`hi, my name is ${name}`);
// 	sayAge();

// 	function sayAge() {
// 		console.log(`i am ${age} years old`)
// 	}
// }
// sayName();

// b. FUNCTION SCOPE

// function fullName() {
// 	const name = "Lorde";
// 	const age = 23;

// 	console.log(name, age);
// }
// fullName();

// callbacks, promises and async waits
// 1. callback functions(synchronous)
const myName = (name, cb) =>{
	console.log('running some code');
	console.log('running some code');
	console.log('running some code');
	console.log('running some code');
	console.log('running some code');
	console.log(`my name is ${name}`);
	cb();
}

function callback() {
	console.log('this ran at the end');
}

myName('Luca', callback);