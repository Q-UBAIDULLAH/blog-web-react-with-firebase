import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../../component/Header'
import { getSingleAd } from '../../config/firebase'
import { getuser } from '../../config/firebase'
import '../../App.css'
function Detailcard(){
     const { adId } = useParams()
    const[adds,setads]=useState([])
    const[takeuser,setuser]=useState()
  
    console.log(adId)
    useEffect(()=>{
        singlead()
      
    },[])
    const  singlead=async()=>{
        const ad= await getSingleAd(adId)
        const user= await getuser(ad.uid)
        setuser(user)
        console.log("user he ye",user)
        setads(ad)
   
        console.log("AD",ad)
    }
    console.log("ADS",adds)
   
    
return(

    <div>

<Header/>
      
{/* <h1>{adds.title}</h1> */}
<div className='detail-img'>
<img   height={300} width={400} src={adds.image}></img>
</div>

<div className='detail-user'>
   <h1 id='heading-detail'><em>USER DETAIL</em></h1>
{ <h4> <b id='detail-2'><em>Discription:</em></b> {adds.Discription}</h4> }
{ <h3>{adds.Amount}</h3> }
{ <h4><b id='detail-2'><em>Owner Name:</em></b>{takeuser?.fullname}</h4> }
{ <h4><b id='detail-2'><em>Email:</em></b>{takeuser?.Email}</h4> }
{ <h4><b id='detail-2'><em>Contact No:</em></b>{takeuser?.number}</h4> }
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
export default Detailcard;
