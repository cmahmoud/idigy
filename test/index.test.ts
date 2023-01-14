import idigy from "../src";

// test range return type
test("expect (range) to return number", () => {
    const value = idigy.range(10);
    expect(typeof value).toBe("number");
});

// test range return value
test("expect (range) to return value between 0 and 100", () => {
    const value = idigy.range(100);
    expect(value).toBeLessThan(101);
    expect(value).toBeGreaterThan(-1);
});

// test uuid return type
test("expect (uuid) to return string", () => {
    const value = idigy.uuid();
    expect(typeof value).toBe("string");
});

// test uuid function if respect given pattern or not
test("expect (uuid) value to match pattern with 4 parts", () => {
    const value = idigy.uuid();
    expect(value).toMatch(/([a-zA-Z0-9]{4}-){3}[a-zA-Z0-9]{4}/i);
});

// test uuid function if respect given pattern or not
test("expect (uuid) value to match pattern with 3 parts", () => {
    idigy.pattern = "xxxx-xxxx-xxxx";
    const value = idigy.uuid();
    expect(value).toMatch(/([a-zA-Z0-9]{4}-){2}[a-zA-Z0-9]{4}/i);
});

// test normal return type
test("expect (normal) to return string", () => {
    const value = idigy.normal();
    expect(typeof value).toBe("string");
});

// test normal return value length
test("expect (normal) value to match length", () => {
    const value = idigy.normal(20);
    expect(value.length).toBe(20);
});
