// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations:
// plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
//

const zero = op => {
	return recur(0, op);
};
const one = op => {
	return recur(1, op);
};
const two = op => {
	return recur(2, op);
};
const three = op => {
	return recur(3, op);
};
const four = op => {
	return recur(4, op);
};
const five = op => {
	return recur(5, op);
};
const six = op => {
	return recur(6, op);
};
const seven = op => {
	return recur(7, op);
};
const eight = op => {
	return recur(8, op);
};
const nine = op => {
	return recur(9, op);
};
const plus = num => {
	return function(res) {
		return res + num;
	};
};
const minus = num => {
	return function(res) {
		return res - num;
	};
};
const times = num => {
	return function(res) {
		return res * num;
	};
};
const dividedBy = num => {
	return function(res) {
		return res / num;
	};
};

console.log(one(plus(one())));
