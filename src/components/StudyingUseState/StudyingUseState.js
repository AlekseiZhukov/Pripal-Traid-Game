import React, {useState, useReducer } from 'react';

const initState = {
    count: 0
}

const reducer = (state, action) => {
    console.log('state: ', state)
    console.log('action: ', action)
    if (action.type === 'DESC') {
        return {
            count: state.count - 1
        }
    }
    if (action.type === 'INC') {
        return {
            count: state.count + 1
        }
    }
}

const StudyingUseState = () => {

    //const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer( reducer, initState)

   /* const handleMinusClick = () => {
        setCount(prevState => {
            return prevState -1
        })
    }

    const handlePlusClick = () => {
        setCount(prevState => {
            return prevState +1
        })
    }*/

    const handleMinusClick = () => {
        dispatch({
            type: 'DESC'
        })
    }

    const handlePlusClick = () => {
        dispatch({
            type: 'INC'
        })
    }

    return (
        <div style={{textAlign: 'center', padding: '50px', fontSize: '25px'}}>
            <div>{state.count}</div>
            <button onClick={handleMinusClick} style={{width: '50px', margin: '25px'}}>-</button>
            <button onClick={handlePlusClick} style={{width: '50px', margin: '25px'}}>+</button>
        </div>
    );
};

export default StudyingUseState;