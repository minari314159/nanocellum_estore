import { nullprofile } from "../assets";
import useAuthContext from "../hooks/useAuthContext";

import { Card } from "../components/components";
const Profile = () => {
	const { user } = useAuthContext();

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
				<h1 className="text-4xl font-bold">{user.username}</h1>
				<p>{user.email}</p>

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
		</section>
	);
};

export default Profile;
