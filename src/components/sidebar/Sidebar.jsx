import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src='https://manjayportfolio.netlify.app/images/user%20now.jpg'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
