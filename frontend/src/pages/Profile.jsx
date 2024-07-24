import { nullprofile } from "../assets";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import { Card } from "../components/components";
const Profile = () => {
	const user = useSelector((state) => state.user.currentUser);
	const [toggle, setToggle] = useState(false);
	const [username, setUsername] = useState("");
	const refresh = useNavigate();


	const handleSubmit = async (e) => {
		e.preventDefault();

		await fetch(`http://localhost:3000/api/auth/users/${user._id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
			body: JSON.stringify({ username }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				refresh("/");
			})
			.catch((err) => console.log(err));
	};
	return (
		<section className="flex min-h-screen flex-col items-center w-full p-10 gap-3">
			<img
				src={user.imageURL ? user.imageURL : nullprofile}
				alt="profile picture"
				className="rounded-full border aspect-square w-[4rem] h-[4rem] content-center object-cover border-black my-3"
			/>
			{user.role === "admin" && (
				<p className="font-bold uppercase">{user.role}</p>
			)}

			<Card style="p-4 w-80">
				{toggle === true ? (
					<form onSubmit={handleSubmit} className="w-full flex flex-col gap-1">
						<label className="input input-bordered input-md flex items-center gap-2 bg-transparent w-full">
							<input
								className="text-4xl font-bold text-center w-full"
								type="text"
								onChange={(e) => setUsername(e.target.value)}
								defaultValue={user.username}
							/>
						</label>

						<button type="submit" className="btn btn-ghost btn-sm ">
							Update Profile
						</button>
					</form>
				) : (
					<>
						<h1 className="text-4xl font-bold">{user.username}</h1>
						<p>{user.email}</p>
					</>
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
