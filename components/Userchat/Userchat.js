import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Userchat(store){
  
  const [dept, setDept] = useState()
  const changeView = (dep) => { setDept(dep); }
const card={
  position:"middle",
  width:"350px",
  border:"3px solid black",
  margin:'100px',
  color:'green',
  fontstyle:'Tw Cen MT',
  fontsize:16,
  height:"490px"
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
        <img src="https://www.planetsnhouses.com/wp-content/themes/planetnhouses/assets/images/hemant-barua.png" alt="Description of your image" />
        <h5>DR.Hemanth Barua</h5>
        <h5>Experiance : "9 years"</h5>
        <button class="btn btn-primary text-wrap text-center" ><Link to="/chatcard1">Submit</Link></button>
        <br></br>
        
        </div>
    </div>




    <div className="App" style={card}>
      <br></br>
    
       <div style={ts}>
        <br></br>
      <img src="https://3.bp.blogspot.com/-8erfTCzmKs0/XAE_AG_GuNI/AAAAAAAAW14/_D-Al24uS8UqxjgRpiPIV2jS7qdGgsZtwCLcBGAs/s1600/photo_kn_rao_10_21_09_a_350.jpg" alt="Description of your image" />
        <h5>KN Roa</h5>
        <h5>Experiance : "7 years"</h5>
        <br></br>
        <button class="btn btn-primary text-wrap text-center" ><Link to="/chatcard2">Submit</Link></button>
        </div>
    </div>
    <div className="App" style={card}>
      <br></br>
     
       <div style={ts}>
        <br></br>
        <img src="https://yt3.googleusercontent.com/ytc/AL5GRJX-poKngNqhc5DDgkHY-yZuvL1GD2Z7s_ZSDxsS=s900-c-k-c0x00ffffff-no-rj" />

        <h5>Krishna</h5>
        <h5>Experiance : "7 years"</h5>
        <br></br>
        <button class="btn btn-primary text-wrap text-center" ><Link to="/chatcard3">Submit</Link></button>
        </div>
    </div>
    
    </div>
   
     <div style={{display:"flex"}}>
 <div className="App" style={card}>
   <br></br>
  
    <div style={ts}>
     <br></br>
     <img src="data:image/jpeg;base64,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"/>
     <h5>Ajay Bhambi</h5>
     <h5>Experiance : "4 years"</h5>
     <br></br>
     <button class="btn btn-primary text-wrap text-center" ><Link to="/chatcard4">Submit</Link></button>
     </div>
 </div>
 <div className="App" style={card}>
   <br></br>

    <div style={ts}>
     <br></br>
     <img src="https://english.cdn.zeenews.com/sites/default/files/2021/01/12/910067-sundeep-koachar-astrologer.jpg" />

     <h5>Sundeep Koachar</h5>
     <h5>Experiance : "5 years"</h5>
     <br></br>
     <button class="btn btn-primary text-wrap text-center" ><Link to="/chatcard5">Submit</Link></button>
     </div>
 </div>
 <div className="App" style={card}>
   <br></br>
   
    <div style={ts}>
     <br></br>
     <img src="https://media.licdn.com/dms/image/C5603AQGzUwqyC-n3EA/profile-displayphoto-shrink_800_800/0/1643712459988?e=2147483647&v=beta&t=dKG59rNxagfGNXWYFMwWLIo5A6YahkhoXL8QuMWVZp8" />
     <h5>Ganeshwara Swamy</h5>
     <h5>Experiance : "6 years"</h5>
     <br></br>
     <button class="btn btn-primary text-wrap text-center" ><Link to="/chatcard6">Submit</Link></button>
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
export default Userchat;