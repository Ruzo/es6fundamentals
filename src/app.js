"use strict";

// const ------------------------------
const x =10;
var doWork= function(){
	var x = 20;
	return x;
};
console.log('const');
console.log('==================================');
console.log('x = ' + doWork());
console.log('outside x = ' + x);

// Destructuring object----------------
var doWork2 = function(){
	return {
		firstName: 'Rich',
		lastName: 'Ruzo',
		address: {
			street: '59 Saint Marks AVe',
			city: 'Freeport',
			state: 'NY',
			zip: '11520'
		}
	};
};
let {firstName: first, lastName: last, address:{city: city, state: state}} = doWork2();
console.log('\n');
console.log('Destructuring object');
console.log('==================================');
console.log('first = ' + first);
console.log('last = ' + last);
console.log('city = ' + city);
console.log('state = ' + state);

//Destructuring array with function and default parameters
var doWork3 = function(a = 5, b = 13, c = 84){
	return [a, b, c];
};
let [a, b, c] = doWork3(undefined, 4, 35);
console.log('\n');
console.log('Destructuring array with function and default parameters');
console.log('==================================');
console.log('a = ' + a);
console.log('b = ' + b);
console.log('c = ' + c);
