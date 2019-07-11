// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements.
// I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

const sum = (arr1, arr2) => {
	let narr1 = arr1.reduce((e, i) => e + i);
	let narr2 = arr2.reduce((e, i) => e + i);
	let sums = narr1 + narr2;
	return sums;
};

console.log(sum([1, 2, 3], [3, 2, 1]));
console.log(sum([10, 9, 8], [3, 2, 1]));
