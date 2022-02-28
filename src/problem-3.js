
/*
	PROBLEM 3: stateful deduplication

	Sometimes, we need to deduplicate values across _multiple_ arrays,
	arrays that we don't always have access to at the same time.

	So, we need your to write a Deduplicator class, that maintains state in between
	calls, so that we can feed it multiple inputs to deduplicate across, and build a final
	deduplicated array.  So, somehing that you can use like this:

	```

	const input1 = [1, 1, 1];
	const input2 = [2, 2, 2];
	const input3 = [3, 3, 3];
	const expected = isShape.exact([1, 2, 3]);
	const output = new Deduplicator()
		.feed(input1)
		.feed(input2)
		.feed(input3)
		.build();
	// output should be [1, 2, 3]

	```

	This deduplicator class should still accept an optional projection function in the constructor.  For example:

	```

	const input = [
		{ name: 'Alice', age: 20 },
		{ name: 'Bob', age: 33 },
		{ name: 'Charlie', age: 20 },
		{ name: 'Alice', age: 21 },
	];

	const output = new Deduplicator((person) => person.name)
		.feed(input)
		.build();
	// output should be
	// [
	// 	{ name: 'Alice', age: 20 },
	// 	{ name: 'Bob', age: 33 },
	// 	{ name: 'Charlie', age: 20 },
	// ]

	```

	This deduplicator class should allow "feed" calls to be chained, i.e.
	`new Deduplicator().feed([]).feed([]).feed([]).build()` should work

	Your implementation should still be _stable_,  i.e. the ordering of the elements should be preserved.

*/

function Deduplicator(projection) {
	// fix me
};

Deduplicator.prototype.feed = function (input) {
	// fix me
	return this;
};

Deduplicator.prototype.build = function () {
	/// fix me
};

module.exports = Deduplicator;
