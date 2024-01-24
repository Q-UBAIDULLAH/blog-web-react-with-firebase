import Header from '../../component/Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { PostAdToDb,auth } from '../../config/firebase';
import "../../App.css"
import background from"../../pngtree-product-mockup-design-stage-with-abstract-green-geometric-podium-in-3d-picture-image_3702965.jpg"
function Sell(){
    const navigate=useNavigate()
    console.log(auth.currentUser.uid)
    const uid=auth.currentUser.uid
    const [title,settitle]=useState()
    const [Discription,setDiscription]=useState()
    const [Amount,setAmount]=useState()
    const [image,setimage]=useState()
    const createtime=new Date()

    const user={title,Discription,Amount,image,uid, createtime}

 const submit=async()=>{

    try{
      await PostAdToDb(user)
      navigate('/dashboard')
   
    }
    catch(e){
alert(e.message)
    }

 } 
    return(
        <div>
            <Header/>
        

        
            <div className='post1'>
            <button id='btn-back' onClick={()=>navigate(-1)} >Back To Dashboard</button><br></br>
                <div className='post2'>
                    <h3 id='tag'>Title</h3>
                <input  id='input-signup' onChange={(e)=>settitle(e.target.value)} placeholder='title'></input>
                <h3 id='tag'>Discription</h3>
                <input  id='input-signup' onChange={(e)=>setDiscription(e.target.value)} placeholder='Discription'></input>
                <h3 id='tag'>Amount</h3>
                <input  id='input-signup' onChange={(e)=>setAmount('RS:'+e.target.value)} placeholder='Amount'></input>
                <h3 id='tag'>Upload Image</h3>
                <input id='upload-file' onChange={(e)=>setimage(e.target.files[0])} type='file'></input>
                <button id='sub-btn' onClick={submit}>Submit</button>
                </div>
            </div>

             
        </div>
    )
}
export default Sell;