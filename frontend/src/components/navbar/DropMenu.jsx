import { navLinks } from "../../index";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SignInButton, SignOutButton } from "./AuthButtons";
import { ACCESS_TOKEN } from "../../constants";

// eslint-disable-next-line react/prop-types
const Dropmenu = ({ active, setActive }) => {
	const token = localStorage.getItem(ACCESS_TOKEN);
	return (
		<div className="flex justify-end z-10">
			<div className="dropdown  dropdown-end">
				<button className="btn btn-circle btn-md btn-ghost cursor-pointer">
					<BsThreeDotsVertical size={18} />
				</button>
				<div
					tabIndex={0}
					className="menu dropdown-content flex flex-col items-center z-50  bg-base-200  backdrop-blur-md  bg-opacity-30 shadow-lg  w-[8rem] mt-3 mr-[-1rem]">
					{navLinks.map((nav) => (
						<Link
							to={`${nav.id}`}
							onClick={() => {
								setActive(true);
							}}
							key={nav.id}
							className={` text-[14px] font-semibold  btn btn-ghost rounded-xl ${
								active === nav.title ? "text-base-content" : "text-gray-800"
							}`}>
							{nav.title}
						</Link>
					))}
					
					{token ? <SignOutButton /> : <SignInButton />}
				</div>
			</div>
		</div>
	);
};

export default Dropmenu;
