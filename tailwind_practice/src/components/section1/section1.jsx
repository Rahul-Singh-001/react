import React from 'react'
import Pagecontent from './Pagecontent'
import Card from './card'

const Section1 = (props) => {
  console.log(props.users)
  return (
    <>
    <div className="px-8">
    <div className='flex  justify-between   py-16'>
        <h1 className='bg-black px-6 py-2 rounded-full text-white uppercase '>target audience</h1>
          <button className='bg-gray-200 rounded-full tracking-widest px-6 py-2 text-black uppercase text-sm'>digital banking platform</button>
    </div>
    <div className="flex gap-10 items-start ">
        <div className="w-[28%]">
           <Pagecontent />
        </div>
        <div id="right" className="w-[72%] overflow-x-auto">
            <Card users={props.users}/>
        </div>

    </div>
  </div>
    </>
  )
}

export default Section1