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

const expectedResult = {
    oldObj_name: 'Sara',
    oldObj_gender: 'Apache Attack Helicopter',
    oldObj_address_location_city: 'SF',
    oldObj_address_location_state: 'CA',
    oldObj_address_preferredLocation_city: 'SF',
    oldObj_address_preferredLocation_state: ['CA', 'MN'],
    oldObj_address_other: undefined,
};

test('should correctly flatten the object using the functional approach', () => {
    const flat = flatten(oldObj, 'oldObj');
    expect(flat).toEqual(expectedResult);
});

test('should correctly flatten the object using the imperative approach', () => {
    const flat = flattenImperative(oldObj, 'oldObj');
    expect(flat).toEqual(expectedResult);
});

test('should handle an empty object when using the functional approach', () => {
    const flat = flatten({}, 'parent');
    expect(flat).toEqual({});
});

test('should handle an empty object when using the imperative approach', () => {
    const flat = flattenImperative({}, 'parent');
    expect(flat).toEqual({});
});
