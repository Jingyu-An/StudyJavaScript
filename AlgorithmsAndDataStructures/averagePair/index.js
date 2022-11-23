function averagePair(arr, target) {
	
	target *= 2;
	
	let first = 0;
	let last = arr.length - 1;
	while (first < last) {
		if (arr[first] + arr[last] < target) {
			first++;
		} else if (arr[first] + arr[last] > target) {
			last--;
		} else {
			console.log(true);
			return true;
		}
	}
	
	console.log(false);
	return false;
}

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false