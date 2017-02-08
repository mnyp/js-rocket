var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		// changing class name
		document.getElementById('cool').className = 'cool red';
	} else {
		// changing class name
		document.getElementById('cool').className = 'cool';
	};
}

var sayMyName = function (name) {
	alert('Hello my name is: ' + name);
}

var car = {
	make: 'VW',
	type: 'Polo',
	colour: 'blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: ['seat 1',
	'seat 2',
	'seat 3',
	'seat 4'
	],
	turnOn: function () {
		this.isTurnedOn = true;
	},
	fly: function () {
		alert('fly');
	},
	switchCar: function (isOn) {
		console.log('turn car ' + isOn)
		if (isOn === true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}
	}
};
console.log('hello there friends');