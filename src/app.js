(function () {
	"use strict";
	require('babel-polyfill');
	{
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
	}
	{
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
	}
	{
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
	}
	{
		//Rest parameters and templates
		var upper = function (strings, ...variables) {
			let text = "";
			let v = 0;
			strings.forEach(part => {
				text += (part === "" && v < variables.length) ? variables[v++] : part;
			});
			return text.toUpperCase();
		};
		let doWork4 = function (name, ...hours) {
			let totalHours = 0;
			hours.forEach(function (hour) {
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
	}
	{
		// Spread parameters
		let doWork5 = function (name, m, tu, w, th, f, ot = 0) {
			return `${name}: Mo[${m}] Tu[${tu}] We[${w}] Th[${th}] Fr[${f}] OT[${ot > 0 ? ot : 'none'}]`
		};
		let hours1 = [5, 12, 6, 14, 8];
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
	}
	{
		// Classes with constructor, get & set, inheritence, super and overrides
		class Person {
			constructor(name) {
				this.name = name;
			}

			get name() {
				return this._name;
			}

			set name(newName) {
				this._name = newName;
			}

			doWork() {
				return "Doing work..."
			}
		}

		class Employee extends Person {
			constructor(name, expertise) {
				super(name);
				this.expertise = expertise;
			}

			get expertise() {
				return this._expertise;
			}

			set expertise(expertise) {
				this._expertise = expertise;
			}

			doWork() {
				return "Doing paid work..."
			}
		}

		class Volunteer extends Person {
			constructor(name, expertise) {
				super(name);
				this.expertise = expertise;
			}

			get expertise() {
				return this._expertise;
			}

			set expertise(expertise) {
				this._expertise = expertise;
			}

			doWork() {
				return "Doing free work..."
			}
		}

		let p1 = new Person("Patrick Schutt");
		let e1 = new Employee("Richard Rouzeau", "Developer");
		let v1 = new Volunteer("Bernard Rouzeau", "UX Designer");

		console.log('\n');
		console.log('Classes with constructor, get & set, inheritence, super and overrides');
		console.log('=====================================================================');
		console.log(`p1 name: ${p1.name} | ${p1.doWork() }`);
		console.log(`e1 name: ${e1.name} | expertise: ${e1.expertise} | ${e1.doWork() }`);
		console.log(`v1 name: ${v1.name} | expertise: ${v1.expertise} | ${v1.doWork() }`);
	}
	{
		// Symbol Iterator
		class MoneyOwed {
			constructor(...amounts) {
				this.amounts = amounts;
			}

			get amounts() {
				return this._amounts;
			}

			set amounts(amounts) {
				this._amounts = amounts;
			}

			listAmounts() {
				let iterator = this.amounts[Symbol.iterator]();
				let next = iterator.next();
				while (!next.done) {
					console.log(next.value);
					next = iterator.next();
				}
			}
		}

		console.log('\n');
		console.log('Symbol Iterator');
		console.log('===============================');
		let moneyOwed = new MoneyOwed(245, 55, 87, 120, 387);
		moneyOwed.listAmounts();
	}
	{
		// Iterator using 'for of'
		class MoneyOwed {
			constructor(...amounts) {
				this.amounts = amounts;
			}

			get amounts() {
				return this._amounts;
			}

			set amounts(amounts) {
				this._amounts = amounts;
			}

			listAmounts() {
				for (let amount of this._amounts) {
					console.log(amount);
				}
			}
		}

		console.log('\n');
		console.log('Iterator using for of');
		console.log('===============================');
		let moneyOwed = new MoneyOwed(245, 55, 87, 120, 387);
		moneyOwed.listAmounts();
	}
	{
		// Custom Iterator
		class ArrayIterator {

			constructor(array) {
				this._array = array;
				this.index = 0;
			}

			next() {
				return (this.index < this._array.length)
					? { value: this._array[this.index++], done: false }
					: { value: undefined, done: true };
			}
		};

		class Members {

			constructor() {
				this._members = [];
			}

			addMembers(...names) {
				this._members = this._members.concat(names);
			}

			[Symbol.iterator]() {
				return new ArrayIterator(this._members);
			}

		}

		console.log('\n');
		console.log('Custom Iterator');
		console.log('===============================');
		let members = new Members();
		members.addMembers('Rich', 'John', 'Pat', 'Joe', 'Gary', 'George');
		for (let member of members) {
			console.log(member);
		};
	}
	{
		// Custom Generator
		class Members {

			constructor() {
				this._members = [];
			}

			addMembers(...names) {
				this._members = this._members.concat(names);
			}

			*[Symbol.iterator]() {
				for (let member of this._members) {
					yield member;
				};
			}

		}

		console.log('\n');
		console.log('Custom Generator');
		console.log('===============================');
		let members = new Members();
		members.addMembers('Rich', 'John', 'Pat', 'Joe', 'Gary', 'George');
		for (let member of members) {
			console.log(member);
		};
	}
	{
		// Custom Generator with filter
		class Members {

			constructor() {
				this._members = [];
			}

			addMembers(...names) {
				this._members = this._members.concat(names);
			}

			*[Symbol.iterator]() {
				for (let member of this._members) {
					yield member;
				};
			}

		}

		function* lengthFilter(list, len){
			for(let text of list){
				text.length == len ? yield text : null;
			}
		};

		console.log('\n');
		console.log('Custom Generator with filter');
		console.log('=====================================');
		let members = new Members();
		members.addMembers('Rich', 'John', 'Pat', 'Joe', 'Gary', 'George');
		for (let member of lengthFilter(members, 4)) {
			console.log(member);
		};
	}
	{
		// let array = [1,2,3,4,5,6,7,8,9];

		// let comp = [for (i of array) i*2];

		// console.log(comp);
	}
} ());