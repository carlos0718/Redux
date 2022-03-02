import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

export const reducer = (state = 0, action) => {
	console.log({ state, action });
	switch (action.type) {
		case "incrementar":
			return state + 1;
		case "decrementar":
			return state - 1;
		case "set":
			return action.payload;
		default:
			return state;
	}
};

function App() {
	const [valor, setValor] = useState("");
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const set = () => {
		dispatch({ type: "set", payload: valor });
		setValor("");
	};
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Contador : {state}</p>
				<button onClick={() => dispatch({ type: "incrementar" })}>Inmentar</button>
				<button onClick={() => dispatch({ type: "decrementar" })}>Decrementar</button>
				<button onClick={set}>Set</button>
				<input type='text' value={valor} onChange={(e) => setValor(Number(e.target.value))} />
			</header>
		</div>
	);
}

export default App;
