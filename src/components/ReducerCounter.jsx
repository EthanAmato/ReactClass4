//useReducer() - more dynamic, one-stop-shop for manipulating state
import { useState } from "react"
import { useReducer } from "react"


export const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    INCREMENT_FACTOR: "incrementFactor",
    DECREMENT_FACTOR: "decrementFactor"
}


//Takes 2 Arguments:
//1. It takes the current state
//2. It takes an action object - typically holds a 'type' (what action do you want
//   2 perform on state) and a 'payload' (data)
function reducer(state, action) {
    switch (action.type) { //"decrement"
        case ACTIONS.INCREMENT:
            return {...state, count: state.count +  state.numChange };
        case ACTIONS.DECREMENT:
            return {...state, count: state.count - state.numChange };
        case ACTIONS.INCREMENT_FACTOR:
            return {...state, numChange: state.numChange + 1 };
        case ACTIONS.DECREMENT_FACTOR:
            return {...state, numChange: state.numChange - 1 };
        default:
            throw new Error()
        // return state
    }
}


export default function ReducerCounter() {
    // const [count, setCount] = useState(0)
    function decrement() {
        setCount((prevCount)=>prevCount-1)
    }
    function increment() {
        setCount((prevCount)=>prevCount+1)
    }



    //When we use useReducer, it returns our state that we want to apply certain methods to
    //in addition to a 'dispatch' function that allows us to perform a series of operations
    //as defined in a 'reducer' function
    //As input, it takes said 'reducer' function in the first argument
    //And the initial state value in the second argument
    const [count, dispatch] = useReducer(reducer, { count: 0, numChange: 1 })


    return (
        <>
            {/* <>
                <div className="h-100 d-flex justify-content-center" style={{ fontSize: '2em' }}>
                    <button className="btn btn-danger"
                        onClick={decrement}>-</button>
                    <span >{count}</span>
                    <button className="btn btn-primary"
                        onClick={increment}>+</button>
                </div>
            </> */}
            <>
                <div className="h-100 d-flex justify-content-center" style={{ fontSize: '2em' }}>
                    <button className="btn btn-danger"
                        onClick={() => dispatch({ type: ACTIONS.DECREMENT_FACTOR })}>-</button>
                    <span >{count.numChange}</span>
                    <button className="btn btn-primary"
                        onClick={() => dispatch({ type: ACTIONS.INCREMENT_FACTOR})}>+</button>
                </div>
                <div className="h-100 d-flex justify-content-center" style={{ fontSize: '2em' }}>
                    <button className="btn btn-danger"
                        onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
                    <span >{count.count}</span>
                    <button className="btn btn-primary"
                        onClick={() => dispatch({ type: ACTIONS.INCREMENT})}>+</button>
                </div>
            </>
        </>
    )
}