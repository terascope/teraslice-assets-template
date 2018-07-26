'use strict';

const _ = require('lodash');

const processor = require('../asset/reverse');
const harness = require('@terascope/teraslice-op-test-harness')(processor);

const inputRecords = [
    {
        example: 'Lorem ipsum'
    }
];

const opConfig = {
    field: 'example'
};

describe('reverse', () => {
    it('empty array should return empty array', () => {
        const results = harness.run([], opConfig);
        expect(results.length).toBe(0);
    });

    it('array should return all the elements correctly reversed', () => {
        const results = harness.run(_.cloneDeep(inputRecords), opConfig);
        expect(results.length).toBe(1);
        expect(results[0].example).toBe('muspi meroL');
    });
});
