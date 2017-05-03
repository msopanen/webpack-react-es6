import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Counter = (props) => {
    const { counter, onDecrement, onIncrement } = props;

    return (
      <div>
        <div>{counter}</div>
        <button name="+" onClick={onDecrement}>-</button>
        <button name="-" onClick={onIncrement}>+</button>
      </div>
    );
};

/** What is the purpose of the PropTypes ? */
Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;
/*
const mapStateToProps = (state) => {
    return state;
};
*/

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" }),
});
/*
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({ type: "INCREMENT" }),
        onDecrement: () => dispatch({ type: "DECREMENT" }),
    };
};
*/
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
