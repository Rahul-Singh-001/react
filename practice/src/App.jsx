import { useState } from "react";
import { PostComponent } from "./post";

export default function App(){
    const [posts,setPosts]=useState([]);
    const postcomponent=posts.map(post=><PostComponent 
      name={post.name}
      title={post.title}
      image={post.image}
      yearofpassing={post.yearOfPassing}
      college={post.college}
     /> )
    function addPost (){
        setPosts([...posts,{
          name:"Rahul",
          title:"Idcard",
          image:"https://www.equinetmedia.com/hubfs/How-to-find-b2b-blog-images.png",
          yearOfPassing:"2027" ,
          college:"Abes Engineering college",
        }])
    }
    return (
      <>
      <div style={{display:'flex',justifyContent:'center' ,backgroundColor:"lightpink", minHeight:"100%"}}>
      
        <button onClick={addPost} style={{backgroundColor:"blue",width:50,height:50}}>Add Post</button>
        <div>
          {postcomponent}
      </div>
    </div>
      </>
    )
}