import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label='Increment'
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label='Decrement'
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label='Add 5' clicked={this.props.onAddCounter} />
        <CounterControl label='Subtract 5' clicked={this.props.onSubCounter} />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.storedResults.map(strResult => (
            <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// The reducer state is map to Props.
// This is maps to props.
const mapStateToProps = state => {
  return {
    ctr: state.counter,
    storedResults: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // props names which has ref to func (here dispatch) which will be executed on dispatch
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
    onAddCounter: () => dispatch({ type: 'ADD', value: 5 }),
    onSubCounter: () => dispatch({ type: 'SUBTRACT', value: 5 }),
    onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
    onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', resultElId: id})
  };
};

// slice of state and which actions to dispatch out of all list in reducer.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
