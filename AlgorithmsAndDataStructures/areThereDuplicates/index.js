// function areThereDuplicates(...args) {
//
// 	let temp = {};
//
// 	for (const item of args) {
// 		if (temp[item]) {
// 			console.log(true);
// 			return true;
// 		} else {
// 			temp[item] = 1;
// 		}
// 	}
//
// 	console.log(false);
// 	return false;
// }

// function areThereDuplicates(...args) {
// 	let temp = {};
//
// 	let first = 0;
// 	temp[args[first++]] = 1;
// 	let last = args.length-1;
// 	while (first < last) {
// 		if (temp[args[first]]) {
// 			console.log(true);
// 			return true;
// 		} else {
// 			temp[args[first]] = 1;
// 			first++;
// 		}
// 		if (temp[args[last]]) {
// 			console.log(true);
// 			return true;
// 		} else {
// 			temp[args[last]] = 1;
// 			last--;
// 		}
// 	}
// 	console.log(false);
// 	return false;
// }

function areThereDuplicates() {
	let result = new Set(arguments).size !== arguments.length;
	console.log(result);
  return result;
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
