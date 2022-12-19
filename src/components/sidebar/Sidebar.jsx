import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src='https://manjayportfolio.netlify.app/images/user%20now.jpg'/>
        <p>I am final year graduate computer science engineering student,keen to work in an IT field , where i can grow my personal and professional skills .
        <br/> <br/> A little details about me: Relevant Coursework: Computer Engineering Fundamentals,Networking, good understanding of data structures & algorithms,operating system and some programming language. <br/> <br/> I have worked over various projects in skills of web development , programming language and desktop applications. Seeking to work in a challenging environment that encourages me to improve and learn new and necessary skills.</p>
      </div>
      <div className="sidebarItem">
      <span className='sidebarTitle'>CATEGORIES</span>
      <ul className='sidebarList'>
        <li className='sidebarListItem'>Life</li>
        <li className='sidebarListItem'>Music</li>
        <li className='sidebarListItem'>Style</li>
        <li className='sidebarListItem'>Sports</li>
        <li className='sidebarListItem'>Tech</li>
        <li className='sidebarListItem'>Cinema</li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className='sidebarTitle'>FOLLOW US</span>
      <div className='sidebarSocial'>
      <i class="sidebarIcon fa-brands fa-square-facebook"></i>
      <i class="sidebarIcon fa-brands fa-instagram"></i>
      <i class="sidebarIcon fa-brands fa-twitter"></i>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
