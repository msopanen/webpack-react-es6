import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage, defineMessages } from "react-intl";

const messages = defineMessages({
    counterLabel: {
        id: "app.home.count",
        description: "Message to show count.",
        defaultMessage: "Count: {count}",
    },
});

const Counter = (props) => {
    const { counter, onDecrement, onIncrement } = props;

    return (
      <div>
        <label htmlFor="plus" id="counter">
          <FormattedMessage {...messages.counterLabel} values={{ count: counter }} />
        </label>
        <button id="plus" onClick={onDecrement}>-</button>
        <button id="minus" onClick={onIncrement}>+</button>
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
