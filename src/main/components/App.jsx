import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class App extends React.Component {
    static propTypes = {
        counter: PropTypes.Number,
        onIncrement: PropTypes.func,
        onDecrement: PropTypes.func
    };

    render() {
        const { counter, onDecrement, onIncrement } = this.props;

        return (
            <div>
                <div>{counter}</div>
                <button onClick={onDecrement}>--</button>
                <button onClick={onIncrement}>++</button>
            </div>
        );
  }
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);