import '../../App.css'
import { useNavigate } from "react-router-dom";
function Card(props){
    const navigate=useNavigate()
    const { title,Discription,Amount,image ,id,createtime } = props.item
    const getdetail=()=>{
    navigate('/detail/'+id)
    }
    return<div onClick={getdetail} className='Dashboard-card'>
    <div className='Dashboard-card2'>

       
        <h3>{title}</h3>
        <img height={200} width={300} src={image}/>
        <h3>{Discription}</h3>
        <h2>{Amount}</h2>
      
        </div>
    </div>
}
export default Card;