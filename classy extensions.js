// Classy Extensions
//
// Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing class extends
// You will be preloaded with the Animal class, so you should only edit the Cat class.
// Task
//
// Your task is to complete the Cat class which Extends Animal and
// replace the speak method to return the cats name + meows. e.g.
//
// 'Mr Whiskers meows.'
// The name attribute is passed with this.name (JS), @name (Ruby), self.name (Python) or this.Name (C#).
//
// Reference: JS, Ruby, Python, C#

const speak = name => {
	return `${name} meows.`;
};

console.log(speak("Sir Fluffer"));
