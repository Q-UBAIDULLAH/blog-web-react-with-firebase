import '../../App.css'
import { useNavigate } from 'react-router-dom'
function Header(){
    return(
        <div className='nav' >
        <div className='navbar'>
          <img width={70} src='https://www.upgrowth.in/wp-content/uploads/2018/08/successful-blog-post-1200x720.png'></img>
          <input id='input' placeholder='Search here'></input>
          <button id='btn-sea'>Search</button>
          <p className='icons'>
            <a>Home</a>
          <a>Details</a>
          <a>Phone</a>
          <a>Details</a>
          <a>Phone</a>
            </p>
           <img width={70} src='https://www.upgrowth.in/wp-content/uploads/2018/08/successful-blog-post-1200x720.png'></img>
        </div>
                </div>
    )
}
export default Header;
