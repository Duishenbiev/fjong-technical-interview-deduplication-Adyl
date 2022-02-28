/* eslint-env mocha */

const isShape = require('vet/objects/isShape');
const assert = require('vet/utils/assert');

const deduplicate2 = require('./problem-2');

describe(
	'problem 2 test suite',
	() => {

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
			const output = deduplicate2(input, (person) => person.name);
			assert(expected(output), 'output does not match expected');
		});

		it('test on deduplicate by age', () => {
			const input = [
				{ name: 'Alice', age: 20 },
				{ name: 'Bob', age: 33 },
				{ name: 'Charlie', age: 20 },
				{ name: 'Alice', age: 21 },
			];
			const expected = isShape.exact([
				{ name: 'Alice', age: 20 },
				{ name: 'Bob', age: 33 },
				{ name: 'Alice', age: 21 },
			]);
			const output = deduplicate2(input, (person) => person.age);
			assert(expected(output), 'output does not match expected');
		});

		it('test on []', () => {
			const input = [];
			const expected = isShape.exact([]);
			const output = deduplicate2(input);
			assert(expected(output), 'output does not match expected');
		});

		it('test on [1, 2, 3]', () => {
			const input = [1, 2, 3];
			const expected = isShape.exact([1, 2, 3]);
			const output = deduplicate2(input);
			assert(expected(output), 'output does not match expected');
		});

		it('test on [1, 1, 2, 2, 3, 3]', () => {
			const input = [1, 2, 3];
			const expected = isShape.exact([1, 2, 3]);
			const output = deduplicate2(input);
			assert(expected(output), 'output does not match expected');
		});

		it('test on [ null, null, null ]', () => {
			const input = [ null, null, null ];
			const expected = isShape.exact([ null ]);
			const output = deduplicate2(input);
			assert(expected(output), 'output does not match expected');
		});

		it('test on [ 1, 2, 3 ] twice', () => {
			const input = [ 1, 2, 3 ];
			const expected = isShape.exact([ 1, 2, 3 ]);
			const output = deduplicate2(input);
			assert(expected(output), 'output does not match expected');
			const output2 = deduplicate2(input);
			assert(expected(output2), 'output does not match expected');
		});

	}
);
