function countUniqueValues(arr) {
	let left = 0;
	let right = 0;
	let count = 0;
	
	while (right < arr.length) {
		if (left === right) {
			count++;
			right++;
		}
		else if (arr[left] === arr[right]) {
			right++;
		} else {
			left = right;
			count++;
      right++;
		}
	}
	
	console.log(count)
}

countUniqueValues([1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 5,5, 6,6,6,7,7,7]);
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
