import React from 'react';
import './Navbar.css';
import menuIcon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import SearchIcon from '../../assets/search.png';
import uploadIcon from '../../assets/upload.png';
import moreIcon from '../../assets/more.png';
import notificationIcon from '../../assets/notification.png';
import profileIcon from '../../assets/jack.png';
import { Link } from 'react-router-dom';

export default function Navbar({setSidebar,setOpenMenu}) {
  
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img src={menuIcon} onClick={()=> setSidebar(prev => !prev)} alt="menu-icon" className='menu-icon' />
           <Link to='/'><img src={logo} alt="logo" className='logo'/></Link> 
        </div>

        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
            <input type="text" placeholder='Search'/>
            <img src={SearchIcon} alt="search-icon" />
            </div>
        </div>

        <div className="nav-right flex-div">
            <img src={uploadIcon} alt="upload-icon"/>
            <img src={moreIcon} alt="more-icon" />
            <img src={notificationIcon} alt="notification" />
            <img src={profileIcon} alt="profile" className='user-icon' onClick={() => setOpenMenu(prev => !prev)}/>
        </div>
    </nav>
  )
}
