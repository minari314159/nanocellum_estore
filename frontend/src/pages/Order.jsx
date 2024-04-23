import { Footer, NavBar} from "../components/components"


const Order = () => {


  return (
    <section className="bg-primary h-screen">
      <NavBar/>
      <div className="flex justify-center items-start mx-5 px-5">
        <div>
        <h1 className="font-bold text-[20px]">Products</h1>
        <br/>
        <div className="w-[70%] flex flex-wrap gap-1">   
        
        </div>
        <br/>
      </div>
      <div className="w-[30%] w-min-[300px] flex flex-col items-start">
        <h2 className="font-bold text-[20px]">Order</h2>
      
        <br/>
      </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Order