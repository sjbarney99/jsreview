// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

const Ghost = () => {
	let rando = Math.ceil(Math.random() * 4);
	let colors = this.color;
	if (rando === 1) {
		colors = "white";
	}
	if (rando === 2) {
		colors = "yellow";
	}
	if (rando === 3) {
		colors = "purple";
	}
	if (rando === 4) {
		colors = "red";
	}
	return colors;
};

console.log(Ghost());
console.log(Ghost());
