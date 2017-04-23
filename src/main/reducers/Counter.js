export default (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 10 };
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};