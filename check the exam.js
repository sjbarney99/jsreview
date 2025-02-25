// The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"].
// The second one is "answers" array and contains student's answers.

// The two arrays are not empty and are the same length.
// Return the score for this array of answers, giving +4 for each correct answer,
// -1 for each incorrect answer, and +0 for each blank answer(empty string).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

const grader = (key, test) => {
	let score = test.reduce((t, a, i) => {
		if (!a) {
			return t;
		}
		if (a === key[i]) {
			return t + 4;
		}
		if (a !== key[i]) {
			return t - 1;
		}
		return t;
	}, 0);
	return score > 0 ? score : 0;
};

console.log(grader(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(grader(["a", "a", "c", "b"], ["a", "a", "b", ""]));
console.log(grader(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
console.log(grader(["b", "c", "b", "a"], ["", "a", "a", "c"]));
