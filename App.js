import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Payment from "./components/Payment";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";

function App() {
	let [{user}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "set_user",
					user: authUser,
				});
			} else {
				dispatch({
					type: "set_user",
					user: null,
				});
			}
		});
	}, []);

	return (
		<div className="app">
			<Routes>
				<Route path="/checkout" element={[<Header />, <Checkout />]} />
				<Route path="/payment" element={[<Header />, <Payment />]} />
				<Route path="/login" element={<Login />} />
				<Route path="/" element={[<Header />, <Home />]} />
				<Route path="*" element={[<Header />, <h1>404 Error!</h1>]} />
			</Routes>
		</div>
	);
}

export default App;
