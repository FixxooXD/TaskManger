import { Link } from "react-router-dom";
import { PencilIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import { account } from "../utils/appWrite";
import { useState, useEffect } from "react";

const Navbar = () => {

	const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

	const checkUser = async () => {
		try {
			const user = await account.get();
			console.log('User is logged in:', user);
			setIsLoggedIn(true)
			return true;
		} catch (error: any) {
			if (error.message.includes('missing scope (account)')) {
				return false;
			} else {
				throw error;
			}
		}
	}

	useEffect(() =>{
      checkUser();
	})

	return (
		<nav className="py-4 border-b-2 border-container shadow-md shadow-gray-400 w-full fixed top-0 bg-base">
			<ul className="flex items-center justify-between  w-11/12 mx-auto">
				<Link to="/">
					<Button content={{
						text: "Taskwrite",
						icon: PencilIcon,
					}} />
				</Link>
				<div className="flex items-center justify-between gap-6">
					{isLoggedIn ? (
						<Link
						to="/tasks"
						className="font-semibold hover:scale-105 transition duration-300 ease-in-out"
					>
						View Tasks
					</Link>
					) : (
						<Link
						to="/login"
						className="flex justify-center items-center font-semibold hover:scale-105 transition duration-300 ease-in-out"
					  >
						SignIn
						<UserGroupIcon className="h-6 w-6 text-black-500 mx-1" /> 
					</Link>
					)}
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;