import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { Store } from "./redux/slices/Store";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

      // Link the reducers and react code 
      <Provider store={Store}>

      <App />

      </Provider>
    
  
);
