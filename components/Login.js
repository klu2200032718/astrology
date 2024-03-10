import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import { useState } from 'react';
import Front from './front';

function Login({store}) {
  const [un,setUn]=useState(null);
  const [result,setResult]=useState(null);

  function handle({Store})
    {
        let pass=document.getElementById("pass")
        if(pass.type === 'password')
        {
            pass.type = 'text';
        }
        else{
            pass.type ='password';
        }
    }
      function handleForm(event) {
        alert("Form Submitted");
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setUn(data.get("un"));
        const pw = data.get("pw");
        console.log(un+" --- "+pw);
        axios.get('http://localhost:3001/check',{params:{
          un: un,
          pw: pw
        }}).then((response)=>{
          console.log(response.data);
          setResult(response.data);
          //store.dispatch({type:"login" ,data:{un:un,role:1}});
        });
      }
      if((result===null || result ==="fail") && (store.getState().AuthReducer[0]==null))
      {
        console.log({result});
      return(
        <div>
           
        <div className='box1'>
        <form onSubmit={handleForm}> 
            <h1>Login</h1>
            <br></br>
            <input type='text' placeholder="username" name="un" id="username" autoComplete="of"/>
            <br></br>
            <br></br>
            <input type='password' placeholder="password" name="un" id="pass"  style={{marginLeft:'23px'}} />
            {/* <img src={} style={{width:'20px',height:'20px',borderRadius:'50px',marginLeft:'2px',cursor:'pointer'}} id='eye' onClick={handle}></img> */}
            <br></br>
            <br></br>
            <button className="button-85" role="button">Submit</button>
            <br></br>
            </form>
            
            <br></br>
            {/* <p style={{display:'inline',fontSize:'20px'}}>To Create a account :</p><Link to="/reg" style={{marginLeft:'10px',fontSize:'20px'}}>ClickHere</Link> */}
        </div>
       
    </div>
      );
    }
    else
    {
      return(
        <div>
          <Front />
        </div>
      );
    }
}

export default Login;