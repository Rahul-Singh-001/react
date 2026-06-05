import React from 'react'

const Card = () => {
    const cards = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1780446670408-884d639d3aaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mountains",
    description: "Beautiful mountain view",
  },
  {
    id: 2,
    image: "https://plus.unsplash.com/premium_photo-1780446664629-0af2532826d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ocean",
    description: "Peaceful ocean waves",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1780408921631-0faac2a0c8a4?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Forest",
    description: "Green forest scenery",
  },
];
  return (
    <div className="flex gap-6 ">
        {cards.map((card)=>{
            return(
    <div className="relative h-125 w-64 rounded-[30px] bg-cover bg-center overflow-hidden flex flex-col justify-between p-5" style={{backgroundImage: `url(${card.image})`}}>
        <div className="absolute inset-0 bg-black/35"></div>
    
          <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center text-sm font-bold">
            {card.id}
          </div>

          <div>
            <p className="text-white text-sm leading-6 mb-5">
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