import React from 'react';
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div>
      <div>{props.count}</div>
      <button onClick={() => props.dispatch({ type: "INCREMENT"})}>Increment</button>
      <button onClick={() => props.dispatch({ type: "DECREMENT"})}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {count: state.count}
}

export default connect(mapStateToProps)(App)

