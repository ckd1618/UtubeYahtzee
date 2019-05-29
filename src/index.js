import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import "@fortawesome/fontawesome-free/css/all.css";
import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
