
/*
	PROBLEM 1: deduplication

	We need you to write a deduplicator, a function that takes in an array,
	and returns a new array with all duplicate elements removed.  For example,
	`deduplicate([1, 1, 2, 2, 3, 3])` should return [1, 2, 3]

	Your implementation should be _stable_,  i.e. the ordering of the elements should be preserved.
	I.e., `deduplicate([1, 1, 2, 2, 3, 3])` should return [1, 2, 3], _not_ [2, 3, 1] or [3, 2, 1]

	Your implementation _should not_ use the spread operator, that's too easy ;-).
	`function deduplicate(input) { return [...new Set(input)]; }` is cheating,
	and so is
	`function deduplicate(input) { return Array.from(new Set(input)); }`

*/

function deduplicate(inputArray) {
	// fix me
};

module.exports = deduplicate;
