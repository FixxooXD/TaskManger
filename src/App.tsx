import "./index.css";
import {Route, Routes } from "react-router-dom";
import Task from "./routes/Task";
import Index from "./routes/Index";
import Navbar from "./components/Navbar";
import SignUp from "./routes/Signup";
import Login from "./routes/Login";

function App() {
	return (
		<>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/tasks" element={<Task />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;