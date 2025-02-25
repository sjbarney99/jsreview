// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible
// by each out of two arguments.

// A few cases:

// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

const divideBy = (a, b, c) => {
	if (a % b === 0 && a % c === 0) {
		return true;
	} else {
		return false;
	}
};

console.log(divideBy(10, 2, 5));
console.log(divideBy(13, 1, 9));
