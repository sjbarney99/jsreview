// An AI has infected a text with a character!!
//
// This text is now fully mutated to this character.
//
// If the text or the character are empty, return an empty string.
// There never will be a case when both are empty as nothing is going on!!
//
// The character is a string. It will always be of length 1 if it's not empty.
//
// Example:
//
// before = "abc"
// character = "z"
// after = "zzz"

const contaminated = (text, char) => {
	let bug;
	if (text === "" || char === "") {
		bug = "";
	} else {
		bug = char.repeat(text.length);
	}
	return bug;
};

console.log(contaminated("abc", "z"));
