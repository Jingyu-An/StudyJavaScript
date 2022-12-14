function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) {
		console.log(null);
		return null;
	}
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	
	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum + arr[i] - arr[i - num];
		if (tempSum > maxSum) {
			maxSum = tempSum;
		}
	}
	
	console.log(maxSum);
	return maxSum;
}

maxSubarraySum([1, 2, 3, 4, 5, 6, 3, 2, 4, 5, 3, 2, 5, 3, 12, 33, 2, 3, 4], 5);
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null