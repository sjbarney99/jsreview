// My grandfather always predicted how old people would get,
// and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

const ageLimit = arr => {
	let mult = arr.map(a => a * a);
	// console.log(mult);
	let sum = mult.reduce((e, i) => e + i);
	let rootie = Math.sqrt(sum);
	let diver = rootie / 2;
	let age = Math.round(diver);
	return age;
};

console.log(ageLimit([95, 91, 63, 80]));
console.log(ageLimit([67.49, 100, 89]));

//9025
//8281
//3969
//6400

//27666
