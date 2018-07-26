'use strict';

/**
    given an array of JSON documents will take the field specified in field and
    will reverse it's content.

    Example:

    ...
    {
        "_op": "reverse",
        "field": "sample"
    },
    ...
 */
function newProcessor(context, opConfig) {
    return function processor(data) {
        data.forEach((doc) => {
            doc[opConfig.field] = doc[opConfig.field].split("").reverse().join("");
        });

        return data;
    };
}


function schema() {
    return {
        field: {
            doc: 'The name of the field in the input document that should be reversed',
            default: null,
            format: 'required_String'
        }
    };
}

module.exports = {
    newProcessor,
    schema
};
