import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = createStore((state = 0, action) => {
	//action = {type: ' tipo de accion', payload: any}
	console.log({ state, action });
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "incrementar": {
			return state + 1;
		}
		case "decrementar": {
			return state - 1;
		}
		case "set": {
			return action.payload;
		}
		default:
			return state;
	}
});

console.log(store.getState());
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());
store.dispatch({ type: "incrementar" });
console.log(store.getState());
store.dispatch({ type: "decremetar" });
console.log(store.getState());

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
