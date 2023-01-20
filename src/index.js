import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

// import "./index.css";
// import App from './App';
// import App from "./todo-21-11-2022/App";
// import App from "./styles-22-11-2022/App";
// import App from "./styles-2-23-11-2022/App";
// import App from "./styles-3-25-11-2022/App";
// import App from "./uncontrolled-29-11-2022/App";
// import App from "./assignment-30-11-2022/App";
// import App from "./assignment-2-02-12-2022";
// import App from "./forward-ref-08-12-2022";
// import App from "./memo-09-12-2022";
// import App from "./memo-2-12-12-2022";
// import App from "./forms-13-12-2022";
// import App from "./router-14-12-2022";
// import App from "./router-2-15-12-2022";
// import App from "./route-hooks-16-12-2022";
// import App from "./dynamic-routing-21-12-2022";
// import App from "./private-route-22-12-2022";
// import App from "./private-route-2-23-12-2022";
// import App from "./useReducer-05-01-2023";
// import App from "./state-management-26-12-2022";
// import App from "./state-management-02-01-2023";
// import App from './redux-17-01-2023'
import App from './redux-2-20-01-2023'

import { StyledEngineProvider } from "@mui/material/styles";
import store from "./redux-2-20-01-2023/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StyledEngineProvider>
);
