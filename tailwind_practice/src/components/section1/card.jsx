import React from 'react'

const Card = (props) => {
    
  return (
    <div className="flex gap-6  w-max">
        {props.users.map((card)=>{
            return(
        <div className="relative h-125 w-64 rounded-[30px] bg-cover bg-center overflow-hidden flex flex-col justify-between p-5" style={{backgroundImage: `url(${card.image})`}}>
        <div className="absolute inset-0 bg-black/35"></div>
    
          <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center text-sm font-bold">
            {card.id}
          </div>

          <div>
            <p className="text-white text-shadow-fuchsia-950 text-sm leading-6 mb-5">
              {card.description}
            </p>

            <button className="bg-blue-500 px-4 py-2 rounded-full text-white text-sm flex items-center gap-3">
              {card.title}

              <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">
                
              </span>
            </button>
          </div> 
   </div>
    )})}
    </div>
)


}

export default Card