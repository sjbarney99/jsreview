// Every week (Friday and Saturday night), the farmer and his son count amount of sheep returned to the yard of their farm.
//
// They count sheep on Friday night, the same goes for Saturday (suppose that sheep returned on
// Friday are not feeding back on hills on Saturday).
//
// As sheep are not coming in one flock, you will be given two arrays (one for each night)
// representing number of sheep as they were returning to the yard during the evenings (entries are positive ints,
// higher than zero).
//
// Farmer and his son know the total amount of their sheep, you will be given this number as third parameter.
//
// Your goal is to calculate the amount of sheep lost (not returned) to the farm after Saturday night counting.
//
// Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5
//
// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6
//
// Good luck! :-)

const ohSheep = (fri, sat, tot) => {
	let f = fri.reduce((e, i) => e + i);
	let s = sat.reduce((e, i) => e + i);
	let com = f + s;
	let missing = tot - com;
	return missing;
};

console.log(ohSheep([1, 2], [3, 4], 15));
console.log(ohSheep([3, 1, 2], [4, 5], 21));
