import React from "react";
import "./topbar.css";
import images from "../images/logoo.png"
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Chat from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import ShareIcon from "@mui/icons-material/Share";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import {Link} from "react-router-dom"

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <ul className="topbarList">
        <Link to='/home'  className="cubuk1">
          <li className="topbarListItem">
            <HomeIcon fontSize="large" className="tapbarIcon" />
            <span className="topbarListItemText1">Feed</span>
          </li>
          </Link>
          <li className="topbarListItem">
            <GroupAddIcon fontSize="large" className="tapbarIcon" />
            <span className="topbarListItemText1">Friends</span>
          </li>
          <li className="topbarListItem">
            <GroupsIcon fontSize="large" className="tapbarIcon" />
            <span className="topbarListItemText1">Groups</span>
          </li>
          <li className="topbarListItem">
            <ShareIcon fontSize="large" className="tapbarIcon" />
            <span className="topbarListItemText1">Share</span>
          </li>
          <li className="topbarListItem">
            <SwapHorizontalCircleIcon fontSize="large" className="tapbarIcon" />
            <span className="topbarListItemText1">Swap</span>
          </li>
        </ul>
      </div>
      <div className="topbarCenter">
        <img
          src={images}
          alt=""
          className="logo"
        />
      </div>
      <div className="topbarRight">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />

          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon
              fontSize="large"
              className="
            Icon1"
            />
            <span className="topbarIconBadge1">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat
              fontSize="large"
              className="
            Icon1"
            />
            <span className="topbarIconBadge1">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsNoneIcon
              fontSize="large"
              className="
            Icon1"
            />
            <span className="topbarIconBadge1">1</span>
          </div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGIGJJl5Bc76Bb8JJtspixN265wolqA_-Ufg&usqp=CAU"
          alt=""
          className="topbarImg"
        />
        
      </div>
     
    </div>
  );
}

export default Topbar;
