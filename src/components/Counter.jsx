
import { useReducer } from 'react';

const Counter = () => {
    const inittialState = {
        count: 0,
        lastAction: null
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'Increment':
                return { count: state.count + 1, lastAction: 'Increment' }
            case 'Decrement':
                return { count: state.count - 1, lastAction: 'Decrement' }
            case 'Reset':
                return { count: 0, lastAction: 'Reset' }
            default:
                return state;
        }
    };


    const [state, dispatch] = useReducer(reducer, inittialState);


    const hendleCountIncrement = () => {
        dispatch({ type: 'Increment' });
    };
    const hendleCountDecrement = () => {
        dispatch({ type: 'Decrement' });
    };
    const hendleCountReset = () => {
        dispatch({ type: 'Reset' });
    };

    return (
        <div>
            <h1>Counter: {state.count}</h1>
            <h3>The last action: {state.lastAction}</h3>
            <button onClick={hendleCountIncrement}>Increment</button>
            <button onClick={hendleCountDecrement}>Decrement</button>
            <button onClick={hendleCountReset}>Reset</button>
        </div>
    )
}

export default Counter;