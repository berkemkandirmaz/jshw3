//1 & 1.2
const i = 5;

class Emploee {
	constructor(obj) {
		for (let key in obj) {
			this[key] = obj[key];
		}
	}
}

Emploee.prototype.getFullName = function() {
	return this.surname + ' ' + this.name;
};

const employeeObj = new Emploee(emplyeeArr[i]);

console.log(employeeObj);
console.log(employeeObj.getFullName());

//1.3
let createEmployesFromArr = (arr) => {
	const createdArr = [];
	for (let key in arr) {
		createdArr.push(new Emploee(emplyeeArr[key]));
	}
	return createdArr;
};

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
console.log(emplyeeConstructArr);

//1.4
const getFullNamesFromArr = (arr) => {

	let fullNameArr = [];

	for (const key of arr) {
		fullNameArr[fullNameArr.length] = key.getFullName();
	}

	return fullNameArr;
};

console.log(getFullNamesFromArr(emplyeeConstructArr));

//1.5
const getMiddleSalary = (arr) => {
	let sum = 0;

	for (const key in arr) {
		sum = sum + arr[key].salary;
	}

	let middleSalary = Math.trunc((sum / arr.length));

	return middleSalary;
};

console.log(getMiddleSalary(emplyeeConstructArr));

//1.6
const getRandomEmployee = (arr) => {
	const randomNum = Math.floor(Math.random() * arr.length);

	return arr[randomNum];
};

console.log(getRandomEmployee(emplyeeConstructArr));