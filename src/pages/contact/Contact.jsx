import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
     
     <span className='contactTitle'>Contact Us</span>
      <form className='contactForm'>
      <label >Your Name</label>
      <input type="text" placeholder='Enter Your Name...' className='contactInput'></input>
        <label >Your Email</label>
        <input type="text" placeholder='Enter your Email...' className='contactInput'></input>
        <label >Your Message</label>
        <input type="text" placeholder='Drop Your message here...' className='contactInputMessage'></input>
        <button className='contactButton'>SUBMIT</button>
      </form>
      <button className='contactLoginButton'>
      <a href='/login' style={{textDecoration:"none",color:"inherit"}}>LOGIN</a>
      </button>
    </div>

  )}


export default Contact
