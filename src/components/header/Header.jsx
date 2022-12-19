import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
         
      </div>
      <img className='headerImg' src='https://www.theholidayspot.com/friendship/wallpapers/images_hd/friendship-wallpaper-800x600-06.jpg' alt=''/>
    </div>
  )
}

export default Header
