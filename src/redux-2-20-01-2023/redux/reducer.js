const reducer = (state, action) => {
  debugger
  if(state === undefined) {
    return { count : 0, itemCount: 0 }
  }

  if(action.type === "INCREMENT") {
    return { 
      ...state,
      count: state.count + 2 
    }
  }

  if(action.type === "DECREMENT") {
    return { 
      ...state,
      count: state.count - 2 
    }
  }

  if(action.type === "ADD") {
    return { 
      ...state,
      itemCount: state.itemCount + 1
    }
  }

  if(action.type === "REMOVE") {
    return { 
      ...state,
      itemCount: state.itemCount - 1
    }
  }

  return state
}

export default reducer