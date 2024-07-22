import { nullprofile } from "../../assets";
import { NavLink } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
const Avatar = () => {
	const { user } = useAuthContext();
	return (
		<NavLink to="/profile">
			<div className="flex-1 px-2 ">
				<img
					src={user ? user.imageURL : nullprofile}
					alt="default picture"
					width="28"
					height="28"
					className="rounded-full  aspect-square w-[2rem] h-[2rem] content-center object-cover border-black border"
				/>
			</div>
		</NavLink>
	);
};

export default Avatar;
