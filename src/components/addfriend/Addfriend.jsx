import React from "react";
import "./addfriend.css";
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import Sidebar from "../sidebar/Sidebar";

function Addfriend(props) {
  return (
    
    <div className="Addfriend">
      <div className="AddfriendWrapper">
        <div className="AddfriendTop">
          <span className="Addfriendtext">ADD FRIEDS</span>
        </div>
      </div>
      <button className="userss"><PersonIcon className="person"/><span className="name">Users 0</span></button>
      <button className="userss"><PersonAddAlt1Icon className="person"/><span className="name">Following 2</span></button>
      <button className="userss"><PersonSearchIcon className="person"/><span className="name">Followers 3</span></button>
      <hr className="hr"></hr>
      <input type="text" className="giris"></input>
      <hr className="hr1"></hr>
      {props.users.map((user, i) => (
        <div className="Addfriendbutton" key={i}>
          <li className="Addfriendbarfriend">
            <img
              src={user.profilePicturePath}
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">
              {user.firstName} {user.lastName}
            </span>
            <button className="Addfriendbutton1">
              <span className="AddfriendListItemText1">Send Request</span>
            </button>
          </li>
        </div>
      ))}

      <button className="son">
        <span className="AddfriendListItemText">NEXT STEP</span>
      </button>
    </div>
   
  );
}

export default Addfriend;
