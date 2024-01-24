import React, { useReducer } from 'react'

const initialState = { count: 0 }
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    default:
      return state
  }
}
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increment = () => {
    dispatch({ type: 'increment' })
  }
  return (
    <div>
      <h3>Use Reducer Concept</h3>
      <p>count : {state.count}</p>

      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseReducer
