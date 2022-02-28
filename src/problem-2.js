
/*
	PROBLEM 2: fancy deduplication

	Sometime you need to deduplicate an array of elements, not by the whole elements,
	but by by some projection of the elements.  For example:

	```

	const input = [
		{ name: 'Alice', age: 20 },
		{ name: 'Bob', age: 33 },
		{ name: 'Charlie', age: 20 },
		{ name: 'Alice', age: 21 },
	];

	// deduplicate this array by the person's name
	const output1 = deduplicate2(input, (person) => person.name);
	// output 1 should be
	// [
	// 	{ name: 'Alice', age: 20 },
	// 	{ name: 'Bob', age: 33 },
	// 	{ name: 'Charlie', age: 20 },
	// ]

	// deduplicate this array by the person's age
	const output2 = deduplicate2(input, (person) => person.age);
	// output 2 should be
	// [
	// 	{ name: 'Alice', age: 20 },
	// 	{ name: 'Bob', age: 33 },
	// 	{ name: 'Alice', age: 21 },
	// ]

	```

	Your task is to write this improved deduplicator, that takes a second argument,
	a projection function that returns a projection of an element to deduplicate on.

	If the projection function is not provided, a default should be used,
	which results in exactly the same behavior as the first deduplicator.

	All of the other rules that apply for the first problem apply for this one,
	i.e. the deduplication should still be _stable_, and no spread operator.

*/

function deduplicate2(inputArray, projectionFunction) {
	// fix me
};

module.exports = deduplicate2;
