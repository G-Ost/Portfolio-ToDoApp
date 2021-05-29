import React, { useReducer, createContext, useContext } from "react";

////Reducer
// // const initialCount = { count: 0 };
// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }

// }

// function Counter({ initialCount = { count: 0 } }) {

//   const [state, dispatch] = useReducer(reducer, initialCount);

//   return (
//     <div>
//       <p>{state.count}</p>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
//     </div>

//   )
// }
// function AppTest() {
//   return <Counter />
// }



const countContext = createContext(0);

function Counter() {
  let { state, dispatch } = useContext(countContext);
  // return (
  //   <button onClick={increment}>{count}</button>
  // )
  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  )
}

// const initialCount = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }

}


function CountContext(props) {
  const initialCount = { count: 0 };
  // const [count, setCount] = useState(initialCount)
  // const increment = () => setCount(count + 1)
  const [state, dispatch] = useReducer(reducer, initialCount);
  return (
    <countContext.Provider value={{ state: state, dispatch: dispatch }}>
      { props.children}
    </countContext.Provider >)
}




function CounterDisplay() {
  // const count = 0;
  let { state } = useContext(countContext);
  return <div>CounterDisplay: {state.count}</div>
}

function AppTest() {
  return (
    <div>
      <CountContext>
        <CounterDisplay />
        <Counter />
      </CountContext>
    </div>

  )
}


export default AppTest;





