import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import { createStore, combineReducers } from "redux";
// import { reducer as jPlayers } from "react-jplayer";

// // Styles the jPlayer to look nice
// import "react-jplayer/src/less/skins/sleek.less";
// // Styles Play/Pause/Mute etc when icons (<i />) are used for them
// import "react-jplayer/src/less/controls/iconControls.less";

// const store = createStore(combineReducers({ jPlayers }));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
