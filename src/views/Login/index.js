import '../../App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../config/firebase';
function Login(){
  const navigate=useNavigate()
  const[Email,setEmail]=useState()
  const[Password,setPassword]=useState()
  const user={Email,Password}

const signin=async()=>{
try{
  await login(user)
 navigate('/dashboard')
}catch(e){
 
alert(e.message)
}
}



    return(
        <div className='body'>   
          <div className='body-1'>
    <h1 id='signup'>Login</h1>
    <h3 id='tag'>Email</h3>
    <input id='input-signup' onChange={(e)=>setEmail(e.target.value)} placeholder='Email'></input>
    <h3 id='tag'>Password</h3>
    <input id='input-signup' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type='password'></input><br></br>
    <button  id='btn-signup' onClick={signin}><b>Login</b></button>
    <h4 id='text'>Don't you have an acount.<span id='click' onClick={()=>navigate('/signup')}>Click here</span></h4>
    </div>
        </div>
    )}
export default Login;