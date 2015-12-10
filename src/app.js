(function () {
	"use strict";

	// const ------------------------------
	const x = 10;
	let doWork = function () {
		let x = 20;
		return x;
	};
	console.log('const');
	console.log('==================================');
	console.log('x = ' + doWork());
	console.log('outside x = ' + x);

	// Destructuring object----------------
	let doWork2 = function () {
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
	let {firstName: first, lastName: last, address: {city: city, state: state}} = doWork2();
	console.log('\n');
	console.log('Destructuring object');
	console.log('==================================');
	console.log('first = ' + first);
	console.log('last = ' + last);
	console.log('city = ' + city);
	console.log('state = ' + state);

	//Destructuring array with function and default parameters
	let doWork3 = function (a = 5, b = 13, c = 84) {
		return [a, b, c];
	};
	let [a, b, c] = doWork3(undefined, 4, 35);
	console.log('\n');
	console.log('Destructuring array with function and default parameters');
	console.log('========================================================');
	console.log('a = ' + a);
	console.log('b = ' + b);
	console.log('c = ' + c);

	//Rest parameters and templates
	var upper = function(strings, ...variables){
		let text = "";
		let v = 0;
		strings.forEach(part => {
			text += (part === "" && v < variables.length) ? variables[v++] : part;
		});
		return text.toUpperCase();
	};
	let doWork4 = function(name, ...hours){
		let totalHours = 0;
		hours.forEach(function(hour){
			totalHours += hour;
		});
		return upper `${name} - Total hours:${totalHours}`
	};
	console.log('\n');
	console.log('Rest parameters and templates');
	console.log('=========================================');
	console.log(doWork4('Richard', 5, 12, 6, 14, 8, 3, 6));
	console.log(doWork4('Dhillon', 8, 12, 6, 10, 8));
	console.log(doWork4('Adeline', 9, 4, 11, 5, 10, 2));

	// Spread parameters
	let doWork5 = function(name, m,tu,w,th,f,ot=0){
		return `${name}: Mo[${m}] Tu[${tu}] We[${w}] Th[${th}] Fr[${f}] OT[${ot>0 ? ot : 'none'}]`
	};
	let hours1 = [5, 12 , 6, 14, 8];
	let hours2 = [8, 12, 6, 10, 8];
	let hours3 = [9, 4, 11, 5, 10];
	let employee1 = ['Richard', ...hours1, 8];
	let employee2 = ['Dhillon', ...hours2];
	let employee3 = ['Adeline', ...hours3, 5];
	console.log('\n');
	console.log('Spread parameters');
	console.log('=========================================');
	console.log(doWork5(...employee1));
	console.log(doWork5(...employee2));
	console.log(doWork5(...employee3));

	// Classes
	class Person{
		constructor(name){
			this.name = name;
		}

		get name(){
			return this._name;
		}

		set name(newName){
			this._name = newName;
		}

		doWork(){
			return "Doing work..."
		}
	}

	class Employee extends Person{
		constructor(name, expertise){
			super(name);
			this.expertise = expertise;
		}

		get expertise(){
			return this._expertise;
		}

		set expertise(expertise){
			this._expertise = expertise;
		}

		doWork(){
			return "Doing paid work..."
		}
	}

	class Volunteer extends Person{
		constructor(name, expertise){
			super(name);
			this.expertise = expertise;
		}

		get expertise(){
			return this._expertise;
		}

		set expertise(expertise){
			this._expertise = expertise;
		}

		doWork(){
			return "Doing free work..."
		}
	}

	let p1 = new Person("Patrick Schutt");
	let e1 = new Employee("Richard Rouzeau", "Developer");
	let v1 = new Volunteer("Bernard Rouzeau", "UX Designer");

	console.log('\n');
	console.log('Classes with constructor, get & set, inheritence, super and overrides');
	console.log('=====================================================================');
	console.log(`p1 name: ${p1.name} | ${p1.doWork()}`);
	console.log(`e1 name: ${e1.name} | expertise: ${e1.expertise} | ${e1.doWork()}`);
 	console.log(`v1 name: ${v1.name} | expertise: ${v1.expertise} | ${v1.doWork()}`);
	
	
	var ArrayIterator = function(_array){
		var index = 0;
		var next = () => {
			return (index < _array.length) ? _array[index++] : {done: true};
		}
	}
	
	class MoneyOwed {
		constructor(...amounts) {
			this.amounts = amounts;
		}
		
		get amounts(){
			return this._amounts;
		}
		
		set amounts(amounts) {
			this._amounts = amounts;
		}
		
		listAmounts(){
			var iterator = new ArrayIterator(this.amounts);
			while(!iterator.done){
				console.log(iterator.next());
			}
		}
	}
}());