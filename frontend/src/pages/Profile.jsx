import { nullprofile } from "../assets";
import  useAuthContext  from "../hooks/useAuthContext";
import { Card } from "../components/components";
const Profile = () => {
	const { user } = useAuthContext();
	console.log(user);
	return (
		<section className="flex min-h-screen flex-col items-center w-full p-10 gap-3">
			<img
				src={nullprofile}
				alt="profile picture"
				width="88"
				height="88"
				className="rounded-full border border-black my-3"
			/>
			<Card style="p-4 w-80">
				<h1 className="text-4xl font-bold">SJO</h1>
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
