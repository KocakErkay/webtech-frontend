const abc = require("./abc");

test("1+1", () => {
    let expected = 2;
    let actual = abc.add(1,1)
    expect(actual).toBe(expected);
})