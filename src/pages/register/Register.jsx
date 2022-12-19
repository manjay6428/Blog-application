import './register.css'

const Register = () => {
  return (
    <div className='register'>
    <span className='registerTitle'>Register</span>
      <form className='registerForm'>
      <label >Username</label>
      <input type="text" placeholder='Enter your Username...' className='registerInput'></input>
        <label >Email</label>
        <input type="text" placeholder='Enter your Email...' className='registerInput'></input>
        <label >Password</label>
        <input type="password" placeholder='Enter your Password...' className='registerInput'></input>
        <button className='registerButton'>register</button>
      </form>
      <button className='registerLoginButton'>
      <a href='/login' style={{textDecoration:"none",color:"inherit"}}>LOGIN</a>
      </button>
    </div>
  )
}

export default Register
