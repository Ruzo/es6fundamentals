'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
	"use strict"

	// const ------------------------------
	;
	var x = 10;
	var doWork = function doWork() {
		var x = 20;
		return x;
	};
	console.log('const');
	console.log('==================================');
	console.log('x = ' + doWork());
	console.log('outside x = ' + x);

	// Destructuring object----------------
	var doWork2 = function doWork2() {
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

	var first = _doWork.firstName;
	var last = _doWork.lastName;
	var _doWork$address = _doWork.address;
	var city = _doWork$address.city;
	var state = _doWork$address.state;

	console.log('\n');
	console.log('Destructuring object');
	console.log('==================================');
	console.log('first = ' + first);
	console.log('last = ' + last);
	console.log('city = ' + city);
	console.log('state = ' + state);

	//Destructuring array with function and default parameters
	var doWork3 = function doWork3() {
		var a = arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];
		var b = arguments.length <= 1 || arguments[1] === undefined ? 13 : arguments[1];
		var c = arguments.length <= 2 || arguments[2] === undefined ? 84 : arguments[2];

		return [a, b, c];
	};

	var _doWork2 = doWork3(undefined, 4, 35);

	var _doWork3 = _slicedToArray(_doWork2, 3);

	var a = _doWork3[0];
	var b = _doWork3[1];
	var c = _doWork3[2];

	console.log('\n');
	console.log('Destructuring array with function and default parameters');
	console.log('========================================================');
	console.log('a = ' + a);
	console.log('b = ' + b);
	console.log('c = ' + c);

	//Rest parameters and templates
	var doWork4 = function doWork4(name) {
		var totalHours = 0;

		for (var _len = arguments.length, hours = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			hours[_key - 1] = arguments[_key];
		}

		hours.forEach(function (hour) {
			totalHours += hour;
		});
		return name + ' - Total hours:' + totalHours;
	};
	console.log('\n');
	console.log('Rest parameters and templates');
	console.log('=========================================');
	console.log(doWork4('Richard', 5, 12, 6, 14, 8));
	console.log(doWork4('Dhillon', 8, 12, 6, 10, 8));
	console.log(doWork4('Adeline', 9, 4, 11, 5, 10));

	// Spread parameters
	var doWork5 = function doWork5(name, m, tu, w, th, f) {
		var ot = arguments.length <= 6 || arguments[6] === undefined ? 0 : arguments[6];

		return name + ': Mo[' + m + '] Tu[' + tu + '] We[' + w + '] Th[' + th + '] Fr[' + f + '] OT[' + (ot > 0 ? ot : 'none') + ']';
	};
	var hours1 = [5, 12, 6, 14, 8];
	var hours2 = [8, 12, 6, 10, 8];
	var hours3 = [9, 4, 11, 5, 10];
	var employee1 = ['Richard'].concat(hours1, [8]);
	var employee2 = ['Dhillon'].concat(hours2);
	var employee3 = ['Adeline'].concat(hours3, [5]);
	console.log('Spread parameters');
	console.log('=========================================');
	console.log(doWork5.apply(undefined, _toConsumableArray(employee1)));
	console.log(doWork5.apply(undefined, _toConsumableArray(employee2)));
	console.log(doWork5.apply(undefined, _toConsumableArray(employee3)));

	// Classes

	var Person = (function () {
		function Person(name) {
			_classCallCheck(this, Person);

			this.name = name;
		}

		_createClass(Person, [{
			key: 'doWork',
			value: function doWork() {
				return "Doing work...";
			}
		}, {
			key: 'name',
			get: function get() {
				return this._name;
			},
			set: function set(newName) {
				this._name = newName;
			}
		}]);

		return Person;
	})();

	var Employee = (function (_Person) {
		_inherits(Employee, _Person);

		function Employee(name, expertise) {
			_classCallCheck(this, Employee);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Employee).call(this, name));

			_this.expertise = expertise;
			return _this;
		}

		_createClass(Employee, [{
			key: 'doWork',
			value: function doWork() {
				return "Doing paid work...";
			}
		}, {
			key: 'expertise',
			get: function get() {
				return this._expertise;
			},
			set: function set(expertise) {
				this._expertise = expertise;
			}
		}]);

		return Employee;
	})(Person);

	var Volunteer = (function (_Person2) {
		_inherits(Volunteer, _Person2);

		function Volunteer(name, expertise) {
			_classCallCheck(this, Volunteer);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Volunteer).call(this, name));

			_this2.expertise = expertise;
			return _this2;
		}

		_createClass(Volunteer, [{
			key: 'doWork',
			value: function doWork() {
				return "Doing free work...";
			}
		}, {
			key: 'expertise',
			get: function get() {
				return this._expertise;
			},
			set: function set(expertise) {
				this._expertise = expertise;
			}
		}]);

		return Volunteer;
	})(Person);

	var p1 = new Person("Patrick Schutt");
	var e1 = new Employee("Richard Rouzeau", "Developer");
	var v1 = new Volunteer("Bernard Rouzeau", "UX Designer");

	console.log('\n');
	console.log('Classes with constructor, get & set, inheritence, super and overrides');
	console.log('=====================================================================');
	console.log('p1 name: ' + p1.name + ' | ' + p1.doWork());
	console.log('e1 name: ' + e1.name + ' | expertise: ' + e1.expertise + ' | ' + e1.doWork());
	console.log('v1 name: ' + v1.name + ' | expertise: ' + v1.expertise + ' | ' + v1.doWork());
})();
//# sourceMappingURL=app.js.map