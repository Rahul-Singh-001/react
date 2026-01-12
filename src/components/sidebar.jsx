import { BadgeDollarSign, House, Menu, Monitor, Settings, SquareUser } from "lucide-react"
import { useState } from "react";

export function Sidebar({open,setopen}){
    const menu=[{icon:<House size={20}/>,label:"Home"},
                {icon:<Monitor size={20}/>,label:"Webinars"},
                {icon:<BadgeDollarSign size={20}/>,label:"Billing"},
                {icon:<SquareUser size={20}/>,label:"User-Management"},
                {icon:<Settings size={20}/>,label:"Settings"},
    ]
    const [showDiv, setShowDiv] = useState(true);
    function toggle(){
       setopen(c=>!c)
       console.log("toggle")
    }
    function handlediv(){
        setShowDiv(c=>!c)
  }
return(
    <div className={`bg-teal-500 text-black shadow-xl h-screen flex flex-col transition-all duration-500 ease-in-out
        ${open ? "w-64" : " w-8"}`}>
        <div className={`flex items-center w-full h-24 ${open ? "justify-between px-4" : " justify-center"}`}>
          {showDiv && <img src="https://media.assettype.com/outlookindia/2025-01-06/ughlko40/1.png?w=452&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0" className=" w-10 h-10 rounded-md "/>}
           <div  onClick={()=>{toggle() 
            handlediv()} } className={`text-bold text-md text-white `}><Menu size={20}/></div>
        </div>
         {menu.map((item,index)=>(
            <div key={index} className={`flex  items-center w-full h-14  ${open ? "justify-between px-4" : "justify-center"} bg-teal-700 border-b-2 transition-all duration-500 ease-in-out`}>
                {showDiv &&<div className={`text-bold text-md text-white `}>{item.label}</div>}
                <div className={`text-bold text-md text-white `}>{item.icon}</div>
            </div>
         ))}
    </div>
)
}