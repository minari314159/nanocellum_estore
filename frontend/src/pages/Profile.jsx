import { nullprofile } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "../components/components";
import UserService from "../services/user-service";

const Profile = () => {
	const [toggle, setToggle] = useState(false);
	const [user, setUser] = useState({});
	const [error, setError] = useState();
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const refresh = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = UserService.updateUser({ firstname, lastname });
		res
			.then((res) => res.json())
			.catch((err) => setError(err.message))
			.finally(() => {
				refresh("/profile");
			});
	};

	useEffect(() => {
		const res = UserService.getMe();
		res
			.then((res) => res.data)
			.then((data) => {
				setUser(data);
			})
			.catch((error) => alert(error.message));
	}, []);

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
									onChange={(e) => setFirstName(e.target.value)}
									defaultValue={user.first_name}
								/>
							</label>
							<label className="input input-bordered input-md flex items-center gap-2 bg-transparent w-[50%]">
								<input
									className="text-4xl font-bold text-center w-full"
									type="text"
									onChange={(e) => setLastName(e.target.value)}
									defaultValue={user.last_name}
								/>
							</label>
						</div>
						{error && <p className="text-accent">{error}</p>}
						<button type="submit" className="btn btn-ghost btn-sm ">
							Update Profile
						</button>
					</form>
				) : (
					<div className="w-full flex flex-col items-center gap-1">
						<h1 className="text-4xl font-bold mb-4">
							{user.first_name} {user.last_name}
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
