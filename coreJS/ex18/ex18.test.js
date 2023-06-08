const set = require('./ex18');

test('test', () => {
    const flat = set(
        {
            name: 'ana',
            cat: {
                name: 'bob',
                age: '2',
                birth: { date: 'foo', place: { country: 'mexico' } },
            },
        },
        'cat.birth.place.state',
        'veracruz'
    );
    expect(flat).toEqual({
        name: 'ana',
        cat: {
            name: 'bob',
            age: '2',
            birth: {
                date: 'foo',
                place: { country: 'mexico', state: 'veracruz' },
            },
        },
    });
});

test('set value in existing nested property', () => {
    const obj = { name: 'ana', cat: { name: 'bob' } };
    const result = set(obj, 'cat.age', 2);
    expect(result).toEqual({ name: 'ana', cat: { name: 'bob', age: 2 } });
});

test('set value in new nested property', () => {
    const obj = { name: 'ana', cat: { name: 'bob' } };
    const result = set(obj, 'cat.birth.date', 'foo');
    expect(result).toEqual({
        name: 'ana',
        cat: { name: 'bob', birth: { date: 'foo' } },
    });
});

test('set value in deep nested property', () => {
    const obj = {
        name: 'ana',
        cat: { name: 'bob', birth: { place: { country: 'mexico' } } },
    };
    const result = set(obj, 'cat.birth.place.state', 'veracruz');
    expect(result).toEqual({
        name: 'ana',
        cat: {
            name: 'bob',
            birth: { place: { country: 'mexico', state: 'veracruz' } },
        },
    });
});

test('set value in existing property', () => {
    const obj = { name: 'ana', cat: { name: 'bob' } };
    const result = set(obj, 'name', 'anna');
    expect(result).toEqual({ name: 'anna', cat: { name: 'bob' } });
});

test('set value in root object', () => {
    const obj = { name: 'ana', cat: { name: 'bob' } };
    const result = set(obj, 'age', 25);
    expect(result).toEqual({ name: 'ana', cat: { name: 'bob' }, age: 25 });
});
