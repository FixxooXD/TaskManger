import { Link } from "react-router-dom";
import { PencilIcon} from "@heroicons/react/24/solid";
import Button from "./Button";

const Navbar = () => {


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