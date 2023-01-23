import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";
// import reducer from "./reducer";

import counterSlice from './counterSlice'

// import { composeWithDevTools } from 'redux-devtools-extension';

// export default createStore(reducer, composeWithDevTools());

export default configureStore({ reducer: counterSlice.reducer })
