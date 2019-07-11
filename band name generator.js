// My friend wants a new band name for her band. She like bands that use the formula:
// 'The' + a noun with first letter capitalized.
//
// dolphin -> The Dolphin
//
// However, when a noun STARTS and ENDS with the same letter,
// she likes to repeat the noun twice and connect them together with the first and last letter,
// combined into one word like so (WITHOUT a 'The' in front):
//
// alaska -> Alaskalaska
//
// europe -> Europeurope
//
// Can you write a function that takes in a noun as a string, and returns her preferred band name written as a string?

const namer = string => {
	let first = string.charAt(0);
	let last = string.charAt(string.length - 1);
	let ups = string.charAt(0).toUpperCase() + string.slice(1);
	let band;
	if (first === last) {
		return (band = ups + string);
	} else {
		return "The " + ups;
	}
};

console.log(namer("dad"));
console.log(namer("hello"));
