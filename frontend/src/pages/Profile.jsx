import { nullprofile } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "../components/components";
import useAuth from "../context/users/useAuth";
import UserService from "../services/user-service";

const Profile = () => {
	const [toggle, setToggle] = useState(false);
	const { user, dispatch, getCurrentUser } = useAuth();

	const [newFirstName, setNewFirstName] = useState(user.firstName);
	const [newLastName, setNewLastName] = useState(user.lastName);
	const refresh = useNavigate();
	useEffect(() => {
		if (user.isAuthenticated && !user.firstName && !user.lastName) {
			getCurrentUser(); // Fetch user details if not already fetched
		}
	}, [user.isAuthenticated, user.firstName, user.lastName, getCurrentUser]);
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Update user details
		try {
			const res = await UserService.updateUser({
				first_name: newFirstName,
				last_name: newLastName,
			});
			const updatedUser = await res.json();

			// Dispatch to update user details in context
			dispatch({
				type: "SET_USER_DETAILS",
				username: updatedUser.username,
				email: updatedUser.email,
				firstName: updatedUser.first_name,
				lastName: updatedUser.last_name,
			});
			refresh("/profile");
		} catch (err) {
			dispatch({ type: "SET_ERROR", value: err.message });
		}
	};

	return (
		<section className="flex min-h-screen flex-col items-center justify-center w-full p-10  gap-3">
			<img
				src={nullprofile}
				alt="profile picture"
				className="rounded-full border aspect-square w-[4rem] h-[4rem] content-center object-cover border-black my-3"
			/>
			{/* {user.is_staff && <p className="font-bold uppercase">Admin</p>} */}

			<Card style="p-4 w-[600px]">
				{toggle === true ? (
					<form onSubmit={handleSubmit} className="w-full flex flex-col gap-1">
						<div className="flex items-center gap-2">
							<label className="input input-bordered input-md flex items-center gap-2 bg-transparent w-[50%]">
								<input
									className="text-4xl font-bold text-center w-full"
									type="text"
									onChange={(e) => setNewFirstName(e.target.value)}
									defaultValue={user.firstName}
								/>
							</label>
							<label className="input input-bordered input-md flex items-center gap-2 bg-transparent w-[50%]">
								<input
									className="text-4xl font-bold text-center w-full"
									type="text"
									onChange={(e) => setNewLastName(e.target.value)}
									defaultValue={user.lastName}
								/>
							</label>
						</div>
						{user.error && <p className="text-accent">{user.error}</p>}
						<button type="submit" className="btn btn-ghost btn-sm ">
							Update Profile
						</button>
					</form>
				) : (
					<div className="w-full flex flex-col items-center gap-1">
						<h1 className="text-4xl font-bold mb-4">
							{user.firstName} {user.lastName}
						</h1>

						<p>
							Username: <i>{user.username}</i>
						</p>
						<p>
							Email: <i>{user.email}</i>
						</p>
					</div>
				)}

				<hr className="my-2 border-1 border-gray-500 w-full" />
				<div className="w-full my-2">
					<h3 className="text-lg font-bold py-2">Past Orders</h3>
					<table className="w-full px-5">
						<thead>
							<tr>
								<th>Order ID</th>
								<th>Design</th>
								<th>Price</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody className="text-center">
							<tr>
								<td>1</td>
								<td>Shirt</td>
								<td>20</td>
								<td>Delivered</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Shoes</td>
								<td>50</td>
								<td>Delivered</td>
							</tr>
						</tbody>
					</table>
				</div>
				<hr className="my-2 border-1 border-gray-500 w-full" />
			</Card>
			<div>
				<Link to="/" className="btn btn-accent btn-ghost">
					{" "}
					&larr; Back
				</Link>

				<button
					onClick={() => {
						setToggle(!toggle);
					}}
					className="btn btn-accent btn-ghost">
					{toggle === false ? <p>Edit Profile</p> : <p>Cancel</p>}
				</button>
			</div>
		</section>
	);
};

export default Profile;
