const reducer = (state, action) => {
  debugger
  if(state === undefined) {
    return { count : 0 }
  }

  if(action.type === "INCREMENT") {
    return { count: state.count + 1 }
  }

  if(action.type === "DECREMENT") {
    return { count: state.count - 1 }
  }

  return state
}

export default reducer