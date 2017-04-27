import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Counter extends React.Component {
    
    static propTypes = {
        counter: PropTypes.number,
        onIncrement: PropTypes.func,
        onDecrement: PropTypes.func,
    };

    render() {

        const { counter, onDecrement, onIncrement } = this.props;

        return (
            <div>
                <div>{counter}</div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({ type: "INCREMENT" }),
        onDecrement: () => dispatch({ type: "DECREMENT" }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);