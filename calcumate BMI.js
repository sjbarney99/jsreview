// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
//
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"

const bmi = (h, w) => {
	let bmiTots = w / Math.pow(h, 2);
	console.log(bmiTots);
	let results = "Obese";
	if (bmiTots <= 18.5) {
		results = "Underweight";
	} else if (bmiTots <= 25.0) {
		results = "Normal";
	} else if (bmiTots <= 30.0) {
		results = "Overweight";
	}
	return results;
};

console.log(bmi(190, 5));
console.log(bmi(900, 0.9));
