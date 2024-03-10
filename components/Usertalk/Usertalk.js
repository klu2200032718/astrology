import React from 'react'
import Talk from '../Talk/Talk'
import { Link } from "react-router-dom";


function Usertalk(){
  

  const card={
    position:"middle",
    width:"350px",
    border:"3px solid black",
    margin:'100px',
    color:'green',
    fontstyle:'Tw Cen MT',
    fontsize:16,
    height:"500px",
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' // add this line to provide a shadow
  } 
const ts={
  margintop:'100px',
  position:'middle',
  color:"black"
}
    return (
        
      <>
      <>
        <div style={{display:"flex"}}>
        <div className="App" style={card}>
      <br></br>
      
       <div style={ts}>
        <br></br>
        <img src="https://globalprimenews.com/wp-content/uploads/2020/08/IMG-20200824-WA0021-1.jpg" />
        <h5>Pt. Jagannath Guruji</h5>
        <h5>Experiance : "9 years"</h5>
        <button class="btn btn-primary text-wrap text-center" ><Link to="/talkcard1">Submit</Link></button>
        <br></br>
        
        </div>
    </div>




    <div className="App" style={card}>
      <br></br>
    
       <div style={ts}>
        <br></br>
      <img src="https://pbs.twimg.com/profile_images/1537798948488122368/zNe0bA5a_400x400.jpg" />
        <h5> Dr. Sohni Sastri</h5>
        <h5>Experiance : "7 years"</h5>
        <br></br>
        <button class="btn btn-primary text-wrap text-center" ><Link to="/talkcard2">Submit</Link></button>
        
        </div>
    </div>
    <div className="App" style={card}>
      <br></br>
     
       <div style={ts}>
        <br></br>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_auoXWxq0hOvn3OT5tGQEfTarSTzSyQ_AQ&usqp=CAU" />

        <h5>Pankaj Sharma</h5>
        <h5>Experiance : "7 years"</h5>
        <br></br>
        <button class="btn btn-primary text-wrap text-center" ><Link to="/talkcard3">Submit</Link></button>
        </div>
    </div>
    
    </div>
   
     <div style={{display:"flex"}}>
 <div className="App" style={card}>
   <br></br>
  
    <div style={ts}>
     <br></br>
     <img src="https://www.astronetra.com/wp-content/uploads/2021/09/5ec63e026c84c-255x250.jpg" />

     <h5>A.S. Kalra</h5>
     <h5>Experiance : "4 years"</h5>
     <br></br>
     <button class="btn btn-primary text-wrap text-center" ><Link to="/talkcard4">Submit</Link></button>
     </div>
 </div>
 <div className="App" style={card}>
   <br></br>

    <div style={ts}>
     <br></br>
     <img src="https://media.licdn.com/dms/image/C5603AQEO5U3rx2LqEg/profile-displayphoto-shrink_800_800/0/1591364621881?e=2147483647&v=beta&t=gFddwNroLrx0sZY2d_OcNYK7lkPma57cNsTJbNsdXj4" />

     <h5>Chandramauli Upadhyay</h5>
     <h5>Experiance : "5 years"</h5>
     <br></br>
     <button class="btn btn-primary text-wrap text-center" ><Link to="/talkcard5">Submit</Link></button>
     </div>
 </div>
 <div className="App" style={card}>
   <br></br>
   
    <div style={ts}>
     <br></br>
     <img src="data:image/jpeg;base64,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" />
     <h5>Maa Prem Ritambhara</h5>
     <h5>Experiance : "6 years"</h5>
     <br></br>
     <button class="btn btn-primary text-wrap text-center" ><Link to="/talkcard6">Submit</Link></button>
     </div>
 </div>

 </div>
 </>
 <>
        <div style={{display:"flex"}}>
    
    
    </div>
    </>

 </>
  )
  
}
export default Usertalk;