import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NetflixLogo from '../../assets/image/logo.png'
import './header.css'
const Header = () => {
  return (
   

   <div className="header_outer_container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li><img src={NetflixLogo} alt="Netflix Logo" className="netflix-logo"/></li> 

            <li>Netflix</li>
            <li>Home</li>
            <li>TvShowse</li>
            <li> Movies</li>
            <li>Latest</li>c
            <li>Mylist</li>
            <li>Browse by Languge</li>
          </ul>
        </div>
        <div className="header-right">
          <ul> 
             <li>
              <SearchIcon />
            </li>
            <li> <NotificationsIcon /></li>
             
            
            <li>
              <AccountBoxIcon />
       </li>
            <li>
              <ArrowDropDownIcon />
            </li> 
           </ul>
        </div>
      </div>
       </div>

  );
};

export default Header;
