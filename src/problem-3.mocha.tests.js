/* eslint-env mocha */

const isShape = require('vet/objects/isShape');
const assert = require('vet/utils/assert');

const Deduplicator = require('./problem-3');

describe(
	'problem 3 test suite',
	() => {

		it('test on multiple feed calls should work', () => {
			const input1 = [1, 1, 1];
			const input2 = [2, 2, 2];
			const input3 = [3, 3, 3];
			const expected = isShape.exact([1, 2, 3]);
			const output = new Deduplicator()
				.feed(input1)
				.feed(input2)
				.feed(input3)
				.build();
			assert(expected(output), 'output does not match expected');
		});

		it('test on deduplicate by name', () => {
			const input = [
				{ name: 'Alice', age: 20 },
				{ name: 'Bob', age: 33 },
				{ name: 'Charlie', age: 20 },
				{ name: 'Alice', age: 21 },
			];
			const expected = isShape.exact([
				{ name: 'Alice', age: 20 },
				{ name: 'Bob', age: 33 },
				{ name: 'Charlie', age: 20 },
			]);
			const output = new Deduplicator((e) => e.name)
				.feed(input)
				.build();
			assert(expected(output), 'output does not match expected');
		});

		it('test on []', () => {
			const input = [];
			const expected = isShape.exact([]);
			const output = new Deduplicator()
				.feed(input)
				.build();
			assert(expected(output), 'output does not match expected');
		});

		it('test on [1, 2, 3]', () => {
			const input = [1, 2, 3];
			const expected = isShape.exact([1, 2, 3]);
			const output = new Deduplicator()
				.feed(input)
				.build();
			assert(expected(output), 'output does not match expected');
		});

		it('test on [1, 1, 2, 2, 3, 3]', () => {
			const input = [1, 2, 3];
			const expected = isShape.exact([1, 2, 3]);
			const output = new Deduplicator()
				.feed(input)
				.build();
			assert(expected(output), 'output does not match expected');
		});

		it('test on [ null, null, null ]', () => {
			const input = [ null, null, null ];
			const expected = isShape.exact([ null ]);
			const output = new Deduplicator()
				.feed(input)
				.build();
			assert(expected(output), 'output does not match expected');
		});

	}
);
