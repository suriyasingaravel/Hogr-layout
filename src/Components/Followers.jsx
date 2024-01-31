import React from 'react'

const Followers = () => {
  return (
    <div style={{display:"flex",width:"90%", margin:"auto", 
    borderRadius:"20px", border:"1px solid grey", justifyContent:"space-evenly", marginTop:"20px",alignItems:"center" }}>
        <div style={{display:"flex", flexDirection:"column", padding:"15px"}}>
            <p>1  <span style={{color:"#d2007a"}}> ❤️</span></p>
            <p>Followers</p>
        </div>
        <p style={{color:"grey"}}> | </p>
        
        <div style={{display:"flex", flexDirection:"column"}}>
            <p>1 <span style={{color:"#95f406"}}>▶</span></p>
            <p>Reco</p>
        </div>
        <p style={{color:"grey"}}> | </p>
        <div style={{display:"flex", flexDirection:"column"}}>
            <p>--⭐</p>
            <p>Rating</p>
        </div>
    </div>
  )
}

export default Followers