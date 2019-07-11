// At the annual family gathering, the family likes to find the oldest living family member’s age
// and the youngest family member’s age and calculate the difference between them.
//
// You will be given an array of all the family members' ages, in any order.
// The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.
// Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

const ager = arr => {
	let sorter = arr.sort();
	let young = Math.min.apply(null, sorter);
	let elder = Math.max.apply(null, sorter);
	let diff = elder - young;
	let fam = [young, elder, diff];
	return fam;
};

console.log(ager([80, 20, 56, 15, 90, 63, 2]));
console.log(ager([9, 56, 45, 61, 18]));
