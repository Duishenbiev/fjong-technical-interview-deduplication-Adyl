/* eslint-env mocha */

const isShape = require('vet/objects/isShape');
const assert = require('vet/utils/assert');

const deduplicate = require('./problem-1');

describe(
	'problem 1 test suite',
	() => {
		it('test on []', () => {
			const input = [];
			const expected = isShape.exact([]);
			const output = deduplicate(input);
			assert(expected(output), 'output does not match expected');
		});

		it('test on [1, 2, 3]', () => {
			const input = [1, 2, 3];
			const expected = isShape.exact([1, 2, 3]);
			const output = deduplicate(input);
			assert(expected(output), 'output does not match expected');
		});

		it('test on [1, 1, 2, 2, 3, 3]', () => {
			const input = [1, 2, 3];
			const expected = isShape.exact([1, 2, 3]);
			const output = deduplicate(input);
			assert(expected(output), 'output does not match expected');
		});

		it('test on [ null, null, null ]', () => {
			const input = [ null, null, null ];
			const expected = isShape.exact([ null ]);
			const output = deduplicate(input);
			assert(expected(output), 'output does not match expected');
		});

		it('test on [ 1, 2, 3 ] twice', () => {
			const input = [ 1, 2, 3 ];
			const expected = isShape.exact([ 1, 2, 3 ]);
			const output = deduplicate(input);
			assert(expected(output), 'output does not match expected');
			const output2 = deduplicate(input);
			assert(expected(output2), 'output does not match expected');
		});

	}
);
