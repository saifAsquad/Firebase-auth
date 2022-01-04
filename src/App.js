import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgetPass from "./components/ForgetPass";
import Login from "./components/Login";
import Register from "./components/Register";
import app from "./utils/firebase";

console.log(app);

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<Register />} />
					<Route path="/forget" element={<ForgetPass />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
