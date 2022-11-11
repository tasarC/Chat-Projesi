import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import Nav from "../nav/Nav";
import Sidebar from "../sidebar/Sidebar";



export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <Sidebar/>
        <Nav/>
        <ChatList />
        <ChatContent />
        <UserProfile />
      </div>
    );
  }
}
