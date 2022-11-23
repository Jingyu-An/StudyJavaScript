function sameFrequency(num1, num2) {
	
	let frequency = {}
	let temp = Infinity;
	
	while (true) {
		temp = num1 % 10;
		if (temp === 0) break;
		frequency[temp] ? frequency[temp] += 1 : frequency[temp] = 1;
		num1 = num1 / 10;
		num1 = parseInt(num1);
	}
	
	console.log(frequency);
	
	while (true) {
		temp = num2 % 10;
		if (temp === 0) break;
		if (frequency[temp]) {
			frequency[temp]--;
		} else if (frequency[temp] === 0) {
			console.log(false);
			return false;
		} else {
			console.log(false);
			return false
		}
		num2 = num2 / 10;
		num2 = parseInt(num2);
	}
	
	
	console.log(true);
	return true;
}

/*
function sameFrequency(num1, num2){
	let strNum1 = num1.toString();
	let strNum2 = num2.toString();
	if(strNum1.length !== strNum2.length) return false;
	
	let countNum1 = {};
	let countNum2 = {};
	
	for(let i = 0; i < strNum1.length; i++){
		countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
	}
	
	for(let j = 0; j < strNum1.length; j++){
		countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
	}
	
	for(let key in countNum1){
		if(countNum1[key] !== countNum2[key]) return false;
	}
	
	return true;
}
*/


sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false