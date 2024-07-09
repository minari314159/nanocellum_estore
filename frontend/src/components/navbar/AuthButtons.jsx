import { NavLink } from "react-router-dom";
export function SignInButton() {
	// const { data: session, status } = useSession();
	// if (status === "loading") {
	// 	return <span className="loading loading-ring loading-lg" />;
	// }
	// if (status === "authenticated") {
	// 	return (
	// 		<Link href="/profile">
	// 			<img
	// 				src={session?.user?.image ? session.user.image : nullprofile}
	// 				alt="profile picture"
	// 				width="28"
	// 				height="28"
	// 				className=" btn btn-circle btn-sm rounded-full border border-black shadow-lg mx-2"
	// 			/>
	// 		</Link>
	// 	);
	// }
	return <NavLink to="/login" className="btn btn-accent rounded-xl">Sign In</NavLink>;
}

export function SignOutButton() {
	// const { data: session } = useSession();
	// if (session) {
	return <NavLink className="btn btn-accent rounded-xl">Sign Out</NavLink>;
}
