import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
         
      </div>
      <img className='headerImg' src='https://imgs.search.brave.com/8TolkOi7lierS5Kgor7yl_bXpYC1v9LSEQ7Xv559hvk/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI1NTkz/NjIuanBn' alt=''/>
    </div>
  )
}

export default Header
