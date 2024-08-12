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
			</ul>
		</nav>
	);
};

export default Navbar;