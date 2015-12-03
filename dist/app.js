'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

(function () {
	"use strict"

	// const ------------------------------
	;
	const x = 10;
	var doWork = function () {
		var x = 20;
		return x;
	};
	console.log('const');
	console.log('==================================');
	console.log('x = ' + doWork());
	console.log('outside x = ' + x);

	// Destructuring object----------------
	var doWork2 = function () {
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

	var _doWork = doWork2();

	let first = _doWork.firstName;
	let last = _doWork.lastName;
	var _doWork$address = _doWork.address;
	let city = _doWork$address.city;
	let state = _doWork$address.state;

	console.log('\n');
	console.log('Destructuring object');
	console.log('==================================');
	console.log('first = ' + first);
	console.log('last = ' + last);
	console.log('city = ' + city);
	console.log('state = ' + state);

	//Destructuring array with function and default parameters
	var doWork3 = function () {
		let a = arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];
		let b = arguments.length <= 1 || arguments[1] === undefined ? 13 : arguments[1];
		let c = arguments.length <= 2 || arguments[2] === undefined ? 84 : arguments[2];

		return [a, b, c];
	};

	var _doWork2 = doWork3(undefined, 4, 35);

	var _doWork3 = _slicedToArray(_doWork2, 3);

	let a = _doWork3[0];
	let b = _doWork3[1];
	let c = _doWork3[2];

	console.log('\n');
	console.log('Destructuring array with function and default parameters');
	console.log('==================================');
	console.log('a = ' + a);
	console.log('b = ' + b);
	console.log('c = ' + c);
})();
//# sourceMappingURL=app.js.map