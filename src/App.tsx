import "./index.css";
import {Route, Routes } from "react-router-dom";
import Task from "./routes/Task";
import Navbar from "./components/Navbar";
import SignUp from "./routes/Signup";
import Login from "./routes/Login";
import UnderDevelopment from "./routes/Maintenance";

function App() {
	return (
		<>
			<Navbar/>
			<Routes>
				<Route path="/" element={<UnderDevelopment />} />
				<Route path="/tasks" element={<Task />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;