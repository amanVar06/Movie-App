import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//this is going to trigger our div with an id of 'root'
//and its going to inject our entire react application
//right inside of it
