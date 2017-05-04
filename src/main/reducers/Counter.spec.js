import reduce from "./Counter";

const state = { counter: 0 };

it("default should return initial value 0", () => {
    const action = {};
    expect(reduce(state, action).counter).toBe(0);
});

it("increment should return plus one", () => {
    const action = { type: "INCREMENT" };
    expect(reduce(state, action).counter).toBe(1);
});

it("decrement should return minus one", () => {
    const action = { type: "DECREMENT" };
    expect(reduce(state, action).counter).toBe(-1);
});
