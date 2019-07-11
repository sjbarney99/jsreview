// When provided with a String, capitalize all vowels

// For example:

// Input: "Hello World!"

// Output: "HEllO WOrld!"

const vowler = str => {
	return str.toLowerCase().replace(/[aeiou]/g, function(l) {
		return l.toUpperCase();
	});
};

console.log(vowler("hello there"));
