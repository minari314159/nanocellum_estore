import { nullprofile, beet } from "../../assets";
import { NavLink } from "react-router-dom";
const Avatar = () => {
	const isSignedIn = false;
	return (
		<NavLink to="/profile">
			{isSignedIn ? (
				<div className="flex-1 px-2 ">
					<img
						src={beet}
						alt="default picture"
						width="28"
						height="28"
						className="bg-white rounded-full border-black border"
					/>
				</div>
			) : (
				<div className="flex-1 px-2 ">
					<img
						src={nullprofile}
						alt="default picture"
						width="28"
						height="28"
						className="bg-white rounded-full border-black border"
					/>
				</div>
			)}
		</NavLink>
	);
};

export default Avatar;
