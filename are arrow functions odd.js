// Time to test your basic knowledge in functions! Return the odds from a list:
//
// odds([1,2,3,4,5]) #=> [1,3,5]

const odds = arr => {
	let odders = arr.filter(a => a % 2);
	return odders;
};

console.log(odds([1, 2, 3, 4, 5, 6, 7]));
console.log(odds([9, 11, 33, 56, 22, 13, 20]));
