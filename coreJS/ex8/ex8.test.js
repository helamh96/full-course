const { flatten, flattenImperative } = require('./ex8.js');

const oldObj = {
    name: 'Sara',
    gender: 'Apache Attack Helicopter',
    address: {
        location: {
            city: 'SF',
            state: 'CA',
        },
        preferredLocation: {
            city: 'SF',
            state: ['CA', 'MN'],
        },
        other: undefined,
    },
};

const result = {
    oldObj_name: 'Sara',
    oldObj_gender: 'Apache Attack Helicopter',
    oldObj_address_location_city: 'SF',
    oldObj_address_location_state: 'CA',
    oldObj_address_preferredLocation_city: 'SF',
    oldObj_address_preferredLocation_state: ['CA', 'MN'],
    oldObj_address_other: undefined,
};

test('testing the functional way', () => {
    const flat = flatten(oldObj, 'oldObj');
    expect(flat).toEqual(result);
});

test('testing the imperative way', () => {
    const flat = flattenImperative(oldObj, 'oldObj');
    expect(flat).toEqual(result);
});

test('functional empty object', () => {
    const flat = flatten({}, 'parent');
    expect(flat).toEqual({});
});

test('imperative empty object', () => {
    const flat = flattenImperative({}, 'parent');
    expect(flat).toEqual({});
});