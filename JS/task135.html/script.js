let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);



let ages = 19;
let res;

if (age >= 18) {
	
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res);