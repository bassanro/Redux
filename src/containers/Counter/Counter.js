import React, { Component } from 'react';
import { connect } from "react-redux"

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
            <CounterOutput value={this.props.ctr} />
            <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
            <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
            <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
            <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
            </div>
        );
    }
}

// The reducer state is map to Props.
// This is maps to props. 
const mapStateToProps = state => { 
    return { 
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => { 
    return { 
        // props names which has ref to func (here dispatch) which will be executed on dispatch 
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', value:5}),
        onSubCounter: () => dispatch({type: 'SUBTRACT', value:5}) 
    };
};



// slice of state and which actions to dispatch out of all list in reducer. 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);