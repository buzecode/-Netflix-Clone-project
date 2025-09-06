import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import NetflixLogo from "../../assets/image/logo.png"

const Header = () => {
  return(
         <div className="header_outer_container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li><img src={NetflixLogo} alt="Netflix Logo" className="netflix-logo"/></li> 

            <li>Netflix</li>
            <li>Home</li>
            <li>TvShowse</li>
            <li> Movies</li>
            <li>Latest</li>
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
              <ArrowDownwardIcon />
            </li> 
           </ul>
        </div>
      </div>
       </div>
  );
};
export default Header;
