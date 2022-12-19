import './topbar.css';
import {Link} from "react-router-dom";
const topbar = () => {
  const user = false;
  return (
    <div className='top'>
      <div className='topLeft'>
      <a href='https://www.facebook.com/manjay.kumar.75457081' ><i class="topIcon fa-brands fa-square-facebook"></i></a>
      <a href='https://www.instagram.com/_its_manjay/' ><i class="topIcon fa-brands fa-instagram"></i></a>
      <a href='https://twitter.com/Manjayk10662818' ><i class="topIcon fa-brands fa-twitter"></i></a>
      
      
      
      </div>
      <div className='topCenter'>
        <ul className='topList'>
           <li className='topListItem'>
           <Link to="">HOME</Link>
           </li>
           <li className='topListItem'>
           <a href='/' style={{textDecoration:"none",color:"inherit"}}>ABOUT</a>
           </li>
           <li className='topListItem'>
            <a href='/contact' style={{textDecoration:"none",color:"inherit"}}>CONTACT</a>
           </li>
           <li className='topListItem'>
           <a href='/write' style={{textDecoration:"none",color:"inherit"}}>WRITE</a>
           </li>
           {
            user? <li className='topListItem'>
           <a href='/logout' style={{textDecoration:"none",color:"inherit"}}>LOGOUT</a>
           </li>:""
           }
           
        </ul>
      </div>
      <div className='topRight'>
      {
        user? (
          <img className='topImg' src='https://manjayportfolio.netlify.app/images/user%20now.jpg'/>
        ) : (
          <>
          <a href='/login' className='loginHome' style={{textDecoration:"none",color:"inherit"}}>LOGIN</a>
          <a href='/register' style={{textDecoration:"none",color:"inherit"}}>REGISTER</a>
          </>
        )
      }
      
      <i class="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default topbar
