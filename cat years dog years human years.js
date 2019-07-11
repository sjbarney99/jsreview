// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears or human_years years ago.

// Return their respective ages now as [humanYears,catYears,dogYears] or [human_years,cat_years,dog_years]

// NOTES:

// humanYears >= 1
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const animalYr = h => {
	let c, d;

	if (h <= 0) {
		c = 0;
		d = 0;
	}
	if (h === 1) {
		c = 15;
		d = 15;
	}
	if (h === 2) {
		c = 15 + 9;
		d = 15 + 9;
	}
	if (h > 2) {
		c = 24 + h * 4;
		d = 24 + h * 5;
	}
	return [h, c, d];
};

console.log(animalYr(20));
