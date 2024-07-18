import { Form } from "../components/components";

const Login = () => {
	return (
		<section className="m-0 p-0 h-screen bg-base-200">
			<div className="flex flex-col justify-center items-center w-full">
				<div className="p-[6rem]" />
				<Form  method="login" />
			</div>
		</section>
	);
};

export default Login;
