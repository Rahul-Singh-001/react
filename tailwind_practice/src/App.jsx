import React from 'react'
import Section1 from './components/section1/section1'
import Card from './components/section1/card'

const App = () => {
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
    <div className=''>
       <Section1 users={cards}/>
       
    </div>
  )
}

export default App