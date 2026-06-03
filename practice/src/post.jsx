export function PostComponent ({name,title,image,yearofpassing,college}){
    return(
        <>
          <div style={{width:200,height:300,borderRadius:10,backgroundColor:"white" ,borderStyle:"solid",borderColor:"black",borderWidth:"2px",flexDirection:"column" ,display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
                 <span >{college}</span>
                 <div>{title}</div>
                 <div style={{borderRadius:20,width:30,height:40}}><img src={image} alt='id' style={{width:"100%",height:"100%"}}/></div> 
                 <div><b>{name}</b></div>
                 <div>{yearofpassing}</div>
                   
          </div>
        </>
    )
}