const set = require("./ex18")

test("test", () => {
    const flat = set({name:"ana", cat:{name:"bob", age:"2",birth:{date:"foo",place:{country:"mexico"}}}}, "cat.birth.place.state","veracruz")
    expect(flat).toEqual({name:"ana", cat:{name:"bob", age:"2",birth:{date:"foo",place:{country:"mexico", state:"veracruz"}}}});
})