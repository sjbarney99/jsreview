// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F

let name;

const initializer = name => {
	let letters = name.match(/\b\w/g).join(".");
	return letters;
};

console.log(initializer((name = "Sydney Barney")));
