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
	{
		let hexNum = 0x15;
		let octalNum = 0o25;
		let binNum = 0b10101;
		let num123 = 123;
		let string123 = '123';
		let x = NaN;
    let price = 12.45782;
		console.log('\n');
		console.log('The Number Object');
		console.log('=====================================');
		console.log(`Hex number 0x15 = ${hexNum}`);
		console.log(`Octal number 0o25 = ${octalNum}`);
		console.log(`Binary number 0b10101 = ${binNum}`);
		console.log('21 as Hex is ' + (21).toString(16));
		console.log('21 as Octal is ' + (21).toString(8));
		console.log('21 as Binary is ' + (21).toString(2));
		console.log(`Number('0x15') = ${Number('0x15')}`);
		console.log(`Number('0o25') = ${Number('0o25')}`);
		console.log(`Number('0b10101') = ${Number('0b10101')}`);
		console.log(`num123 is a number: ${Number.isFinite(num123)}`);
		console.log(`string123 is a number: ${Number.isFinite(string123)}`);
		console.log(`Even if x = NaN, x === NaN is ${x===NaN}`);
		console.log(`However, Number.isNaN(x) is ${Number.isNaN(x)}`);
    console.log(`Number.parseInt('0030') is ${Number.parseInt('0030')}`);
    console.log(`Number.parseFloat('003.50') is ${Number.parseFloat('003.50')}`);
    console.log(`Number.isInteger(-10000) is ${Number.isInteger(-10000)}`);
    console.log(`Number.isInteger('-10000') is ${Number.isInteger('-10000')}`);
    console.log(`Number.isInteger(1.0) is ${Number.isInteger(1.0)}`);
    console.log(`Number.isInteger(0.1) is ${Number.isInteger(0.1)}`);
    console.log(`The maximum safe integer is ${Number.MAX_SAFE_INTEGER}`);
    console.log(`Number.isSafeInteger(3.0) is ${Number.isSafeInteger(3.0)}`);
    console.log(`Number.isSafeInteger(Infinity) is ${Number.isSafeInteger(Infinity)}`);
    console.log(`Number.isSafeInteger(Math.pow(2,53)-1) is ${Number.isSafeInteger(Math.pow(2,53)-1)}`);
    console.log(`Number.isSafeInteger(Math.pow(2,53)) is ${Number.isSafeInteger(Math.pow(2,53))}`);
		console.log(`EPSILON check: 0.2 + 0.1 === 0.3 is ${((0.2+0.1) - 0.3) < Number.EPSILON}`);
    console.log(`$${price} toFixed with 2 decimals is $${price.toFixed(2)}`);
	}
  {
    const lowNum = 2500;
    const highNum = 6000;
		console.log('\n');
    console.log('The Math Object');
		console.log('=====================================');
    console.log(`PI is ${Math.PI}`);
    console.log(`Random integer between ${lowNum}-${highNum}: ${Math.floor((Math.random()*Math.floor(highNum-lowNum))+lowNum)}`);
    console.log(`It's $12.52, let's make it an even $${Math.round(12.52)}? No.`);
    console.log(`It's $12.48, let's make it an even $${Math.round(12.48)}? Sure.`);
    console.log(`It's $12.63, which is precisely in 32Bit: $${Math.fround(12.63)}.\nHope you have my change in 32Bit.`);
    console.log(`Actually, your change has the absolute value of ${Math.abs(null)}.`);
    console.log(`Oh, look, $12.48 keeps rounding up to $${Math.ceil(12.48)}!`);
    console.log(`I prefer $12.63 which can be truncated to $${Math.trunc(12.63)}. Thanks.`);
    console.log(`We can go for the max of $12.52, $12.48 and $12.63 which is $${Math.max(12.52, 12.48, 12.63)}.`);
    console.log(`Or the min which is $${Math.min(12.52, 12.48, 12.63)}.`);
    console.log(`Tell you what, I'll go with the max ($${Math.max(12.52, 12.48, 12.63)}) and \npay you $${Math.sqrt(12.63)} for ${Math.sqrt(12.63)} months ;)`);
  }
  {
    let numArray = [1, 5, 7, 8, 11];
    let myArray = new Array(1, 2, 3);
    let newArray = new Array(3);
    let ofArray = Array.of(3);
    let entries = numArray.entries();
    let keys = numArray.keys();
    let values = numArray.values();
		console.log('\n');
    console.log('The Array Object');
		console.log('=====================================');
    console.log(`The even number in numArray[1, 5, 7, 8, 11] is: ${numArray.find(e => e%2 == 0)}`);
    console.log(`The index of the even number in numArray[1, 5, 7, 8, 11] is: ${numArray.findIndex(e => e%2 == 0)}`);
    console.log(`Let's fill [1, 5, 7, 8, 11] with 0s: [${[1, 5, 7, 8, 11].fill(0)}]`);
    console.log(`Let's fill the second half of [1, 5, 7, 8, 11] with 0s: [${[1, 5, 7, 8, 11].fill(0, 3)}]`);
    console.log(`Let's fill the first half of [1, 5, 7, 8, 11] with 0s: [${[1, 5, 7, 8, 11].fill(0, null, 2)}]`);
    console.log(`Let's fill the middle of [1, 5, 7, 8, 11] with 0s: [${[1, 5, 7, 8, 11].fill(0, 1, 4)}]`);
    console.log(`Let's fill 2nd and 3rd from last of [1, 5, 7, 8, 11] with 0s: [${[1, 5, 7, 8, 11].fill(0, -3, -1)}]`);
    console.log(`Copy the last two elements over the first two of [1, 5, 7, 8, 11]: [${[1, 5, 7, 8, 11].copyWithin(0, 3)}]`);
    console.log(`Copy the first two elements over the last two of [1, 5, 7, 8, 11]: [${[1, 5, 7, 8, 11].copyWithin(-2, 0, 3)}]`);
    console.log(`new Array(1, 2, 3): [${myArray}]`);
    console.log(`new Array(3): [${newArray}]`);
    console.log(`Array.Of(3): [${ofArray}]`);
    console.log(`Create an array from "ARRAY": [${Array.from("ARRAY")}]`);
    console.log(`Create a new array from squares of [1, 2, 3]: [${Array.from([1,2,3], x => x * x)}]`);
    console.log(`The first entry of numArray is: [${entries.next().value}]`);
    console.log(`The second and third entries of numArray are: [${entries.next().value}] and [${entries.next().value}]`);
    console.log(`The first, second and third keys of numArray are: [${keys.next().value}], [${keys.next().value}] and [${keys.next().value}]`);
    console.log(`The first, second and third values of numArray are: [${values.next().value}], [${values.next().value}] and [${values.next().value}]`);
    console.log(`The fact that every number in numArray is less than 15 is ${numArray.every(item => item < 15)}`);
    console.log(`The fact that every number in numArray is even is ${numArray.every(item => item % 2 == 0)}`);
    console.log(`The fact that some numbers in numArray is even is ${numArray.every(item => item % 2 == 0)}`);
    console.log(`The fact that numArray includes 7 is ${numArray.includes(7)}`); // part of ES7
  }
  {
    let obj = {firstName: "Richard", lastName: "Rouzeau"};
    let set = new Set(['firstElement', 'secondOne', obj, 1]); // new set created from an array
    set.add("1"); // add string '1' in addition to number '1' previously added
    console.log('\n');
    console.log('The Set Collection');
		console.log('=====================================');
    console.log(`The current size of the set is: ${set.size}`);
    console.log(`List of items in set: `);
    for(let item of set.values()){
      let preText = Number.isFinite(item) ? '(Number) ' : ''; // label items that are real numbers
      console.log(` ${preText}${item}`)
      };
    console.log(`set has string \"1\": ${set.has("1")}`);
    console.log(`set has number 1: ${set.has(1)}`);
    set.add('secondOne'); // adding an included item is ignored
    console.log(`The set's size is still ${set.size} after trying to set.add(\'secondOne\') again`);

  }
}());