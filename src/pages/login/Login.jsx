import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
    <span className='loginTitle'>Login</span>
      <form className='loginForm'>
        <label >Email</label>
        <input type="text" placeholder='Enter your Email...' className='loginInput'></input>
        <label >Password</label>
        <input type="password" placeholder='Enter your Password...' className='loginInput'></input>
        <button className='loginButton'>Login</button>
      </form>
      <button className='loginRegisterButton'>
      <a href='/register' style={{textDecoration:"none",color:"inherit"}}>REGISTER</a>
      </button>
    </div>
  )
}

export default Login
