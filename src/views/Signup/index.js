import '../../App.css'
import { useState } from "react";
import { register } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
function Register(){
    const navigate=useNavigate()
const [fullname,setfullname]=useState()
const [number,setnumber]=useState()
const [Email,setEmail]=useState()
const [Password,setPassword]=useState()
const user={fullname,number,Email,Password}
const  signup= async()=>{

   try{
    await register(user)
    navigate("/")
   }  catch(e){
alert(e.message)
   }
 
}

    return(
        <div className='body' >
            <div className='body-1'>
            <h1 id='signup'> SignUp</h1>
            <h3 id='tag'>Fullname</h3>
        <input id='input-signup' onChange={(e)=>setfullname(e.target.value)} placeholder="Fullname"></input>
        <h3 id='tag'>Mobile Number</h3>
   <input id='input-signup' type='number' onChange={(e)=>setnumber(e.target.value)} placeholder="Contact"></input>
   <h3 id='tag'>Email</h3>
       <input id='input-signup' onChange={(e)=>setEmail(e.target.value)} placeholder="Email"></input>
       <h3 id='tag'>Password</h3>
          <input id='input-signup' onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type='password'></input><br></br>
<button id='btn-signup' onClick={signup}><b>SignUp</b></button>
</div>
        </div>
    )
}
export default Register;