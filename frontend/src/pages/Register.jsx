import { Form } from "../components/components";

const Register = () => {
	return (
		<section className="m-0 p-0 h-screen bg-base-200">
			<div className="flex flex-col justify-center items-center w-full">
				<div className="p-[6rem]"></div>
				<Form method="register" />
			</div>
		</section>
	);
};

export default Register;
