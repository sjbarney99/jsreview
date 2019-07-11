// #Bug Fixing Kata
//
// Here we have a method that adds a new item to the list of integers.
// The number can be any number, and it does not matter.
//
// In our test case we check to assure that the returned list has one more item than the input list.
// However the method needs some modification to pass this test.
//
// P.S. You have to create a new list and add the new item to that.
// Adding a new item to the input list is not going to work. However it is not the whole story.

function addExtr(listOfNumbers, n) {
	for (var i = 0; i <= listOfNumbers.length; i++) {
		finalList = listOfNumbers.push(n);
	}
	return finalList;
}

console.log(addExtr(listOfNumbers, 9));
