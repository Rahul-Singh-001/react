import { useState } from "react"

const App=()=>{
    const [name,setName]=useState('')
    const [details,setDet]=useState('')
    const [data,setData]=useState([])
    let submitHandler=(e)=>{
      e.preventDefault();
      setData((prev) => [...prev, { name, details }])
      setName('')
      setDet('')
    }
  return (
        <div className=" bg-black   text-white p-10 min-h-screen">
          <form onSubmit={(e)=>{submitHandler(e)}}>
            <div className="flex flex-col items-center gap-8">
            <input 
              type={"text"} 
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
              className="outline-none p-4 border-2 w-1/2 rounded-lg text-3xl"
              placeholder={"Enter your name..."}></input>
            <textarea 
              value={details} 
              onChange={(e)=>{
              setDet(e.target.value);
              }}
              className="outline-none p-4 w-1/2 border-2 rounded-lg text-3xl"
              placeholder={'Enter your details...'}>
            
            </textarea>
            <button className=" active:bg-gray-400 outline-none p-4 w-1/2 border-2 rounded-lg bg-white text-black text-3xl">submit</button>
            </div>
          </form> 
          <br/>
          <hr/>
          
          <div  className='flex flex-col items-center gap-8 ' >
              <h6 className='text-5xl mt-8'>see the added notes</h6>
              <hr className='w-full'/>
              {data.map((item,idx)=>{
                  return <div key={idx} className=" relative h-48 bg-cover bg-center overflow-auto w-60 rounded-lg flex flex-col justify-between bg-white text-black p-4 bg-[url('https://thumbs.dreamstime.com/z/blank-lined-spiral-notebook-page-top-view-white-paper-sheet-clean-horizontal-lines-ideal-writing-planning-education-444676264.jpg')]">
                           <h1 className='text-4xl' >{item.name}</h1>
                           <span className="text-gray-400">
                                {item.details}
                           </span>
                           <button onClick={()=> {setData(data.filter((_, i) => i !== idx))
  }}
                           className='bg-red-500 rounded text-white active:scale-98 font-bold'>Delete</button>
                    </div>  
              })}
          </div>
          
        </div>
  )
  
}
export default App;