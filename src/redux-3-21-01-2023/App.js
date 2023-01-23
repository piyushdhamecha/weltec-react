// import {useState, useReducer} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import counterSlice from './counterSlice'

const App = (props) => {
  const count = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(counterSlice.actions.incrementByTwo())}>Increment</button>
        <button onClick={() => dispatch(counterSlice.actions.decrement())}>Decrement</button>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     count: state
//   }
// }

// export default connect(mapStateToProps)(App)
export default App