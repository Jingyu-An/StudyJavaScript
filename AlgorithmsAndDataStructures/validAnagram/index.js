function validAnagram(str1, str2) {
	
	if (str1.length !== str2.length) {
		console.log(false);
		return false;
	}
	
	let objStr1 = {};
	
	for (let char of str1) {
		objStr1[char] ? objStr1[char] +=1 : objStr1[char] = 1;
	}
	
	for (let char of str2) {
		if (!objStr1[char]) {
			console.log(false);
			return false;
		} else {
			objStr1[char] = --objStr1[char];
		}
	}
	console.log(true);
	return true;
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat", "car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true