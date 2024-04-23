
import Form from "../components/Form"
import NavBar from "../components/NavBar"

const Register = () => {
  return (
    <section className="m-0 p-0 h-screen bg-primary">
      <NavBar/>
 <div className="flex flex-col justify-center items-center w-full">
    <div className="p-[6rem]"></div>
      <Form route="/api/user/register/" method="register"/>
    </div>
    </section>
  )
}

export default Register