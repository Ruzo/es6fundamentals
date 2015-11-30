"use strict";
const x =10;
var doWork= function(){
	var x = 20;
	return x;
};

console.log('x = ' + doWork());
console.log('outside x = ' + x);