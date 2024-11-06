

import Image from "next/image";
import picx123 from "../public/picx123.svg";


export default function home(){
    return(
        <div>
              
  
       <div className="navbar h-[90px] w-[1920px] bg-[#A29875]">
        <div className="w-[439px] h-[94px] top-[20px] left-[36px]">
        <h1 className="font-serif text-3xl leading-93.75px text-white pl-12 pt-7">MANZZARI</h1>

    </div>
       </div>


     <div className="main flex justify-around ">
     <div className="left w-[496px] h-[300px] mt-[130px] pl-[176px]">
        <h1 className="font-serif text-2xl size-[40px] leading-[25.8px]  text-black">IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1> 
         <div className="pra w-[902ox] h-[147px] ">
            <p className="font-sans pt-16  text-[#787054]">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
         </div>
     
     <div className="button w-[180px] h-[55px] top-[730px] lef-[176px] rounded-lg p-[10px] gap-[10px] bg-[#787054]">
        <button className="w-[177px] h-[38px] font-semibold size-[30px] leading-[37.5px] text-white">Explore Now</button>
     </div>
    
</div>
       
<div className="Right w-[490px] h-[667px]  float-right mt-24">
        <Image  className =""src={picx123} alt="picx123" height={250} width={250}/>



       </div></div>

             
        </div>
    )
};

