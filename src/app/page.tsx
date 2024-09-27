import Image from "next/image";
import Liba from "../images/Liba.png"
import Wassim from "../images/Untitled design (12).png"
export default function Home() {

  return (
   <div className=" bg-blue-400 w-full h-full overflow-x-hidden " >

<div className=" md:flex md:justify-between lg:flex lg:justify-between md:mx-28 lg:mx-28  "  >

    <div className=" ml-16 pl-4 mt-8 " >
      {/* Image contaner */}

<div className=" flex flex-col w-max  gap-2    " >

  <div className="items-center justify-center pt-16 pl-4 ">
<Image src={Liba} alt="" height={200} width={200} sizes="" />
</div>

<div className=" items-center justify-center text-center  " >
  <h1 className="text-white font-bold text-4xl shadow-sm " >Liba.Ai</h1>
  <p className="text-white/70 font-semibold mt-2  " >Your Customisable Ai Chat Agent </p>
<h3 className="tex-sm font-bold text-white mt-2 " >Start Now</h3>
</div>

</div>




    </div>

{/* right side */}

    <div className="ml-4 pb-8  " >  
<div className=" bg-white mt-12  w-max items-center justify-center text-center flex flex-col gap-4 p-5 shadow-xl mb-5 rounded-sm border " >

<div className="" >
  <div className="mb-4" >
  <h1 className=" font-extrabold mb-3 uppercase  " >Liba Is What you need in your website </h1>
  
  <h2 className=" text-sm font-extralight " > How To Use it ? </h2>
  </div>
 <hr />

{/* Step one */}
  <div className="my-2" >
    <h1 className="text-xl font-bold " >Step One</h1>
    <p className="font-extralight" >Copy The Link of The  website: <a className="font-extrabold" >Website</a></p>

  </div>
  <hr />
{/* Step two */}
  <div className="my-2" >
<h1 className="text-xl font-bold" >Step Two</h1>
<p className="font-extralight" >Paste it befor your website</p>
<Image src={Wassim} height={300} width={300} alt="" className="ml-6 my-4 "  />

  </div>
  <hr />
  <h1 className="mt-4 font-extrabold text-blue-600 " >Start Now withe Us</h1>
</div>


</div>
</div>
</div>

</div>
  );
}