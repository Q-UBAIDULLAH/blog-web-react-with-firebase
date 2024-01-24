import '../../App.css'
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import Card from "../../component/Card";
import {auth,onAuthStateChanged } from "../../config/firebase";
import { useState,useEffect } from "react";
import { getAds } from "../../config/firebase";
function Dashboard(){
    const navigate=useNavigate()
    const[email,setemail]=useState()
    const[ads,setads]=useState([])
    onAuthStateChanged(auth,async (user) => {
        if (user) {
          console.log(user)
        setemail(user.email)


        } else {
          
        }
      });
      
useEffect(()=>{
    getads()
},[])
      const getads=async()=>{
      const res= await getAds()
      console.log('res', res)
      setads(res)
      }
 if(!ads.length){
   return <div><img id='loader' src='https://cdn.pixabay.com/animation/2023/02/02/16/42/16-42-28-220_512.gif'></img></div>
 }


    return(
        <div>
        
            <Header/>
               
         <marquee className="blink" behavior="alternate" scrollamount="7">  Discover Amazing Features and Content.</marquee>
     <b id='user-gmail'>SignUp User:</b><input id='get-email' value={email}></input>
          <button id="sell" onClick={() => navigate('/post')}>SELL</button>
      
   
       <div className="dashboard-card3">
<div className="dashboard-card4">


      
{ads.map(item =>{
    return <Card item={item}/>
})}
 </div>
 </div>
 
 <div className="footer">

<div>

  <h1>RESOURCES</h1>
  <p>Documentation</p>
  <p>Application</p>
  <p>System</p>
  <p>System</p>
</div>
<div>
  <h1>PRICING</h1>
  <p>Overview</p>
  <p>Premium Plans</p>
  <p>System</p>
  <p>Faq</p>
</div>
<div>
  <h1>SOCIAL</h1>
  <p>Pricing</p>
  <p>Premium Plans</p>
  <p>System</p>
  <p>Plans</p>
</div>
<div>
  <h1>SOCIAL</h1>
  <p>Pricing</p>
  <p>Premium Plans</p>
  <p>System</p>
  <p>Plans</p>
</div>
<div>
<h1>ACTIVITY</h1>
<p>Pricing</p>
<p>Premium Plans</p>
<p>System</p>
<p>Plans</p>
</div>
</div>

        </div>

     
    )
  
}
export default Dashboard;