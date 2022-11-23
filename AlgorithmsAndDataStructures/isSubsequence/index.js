function isSubsequence(str1, str2) {
	
	let first = 0;
	let second = 0;
	while (second < str2.length) {
		if (str1.charAt(first) === str2.charAt(second)) {
			first++;
		} else {
			second++;
		}
		if (first === str1.length) {
			console.log(true);
			return true;
		}
	}
	
	console.log(false);
	return false;
}


isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)