'use strict';

function calcAge(birthYear) {
	const age = 2037 - birthYear;
	function printAge(){
		const output = `You are ${age}, born in ${birthYear}`;
		console.log(output);
		
		if (birthYear >= 1981 && birthYear <= 1996) {
			const str = `Oh, and you're a millenial, ${firstName}`;
			console.log(str);
			
			function add(a, b) {
				return a + b;
			}
		}
	}
	printAge();
	return age;
	// console.log(add(2, 3));
}

const firstName = 'John';
calcAge(1991);