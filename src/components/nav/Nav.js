import React, { Component } from "react";
import "./nav.css";
import {Link} from "react-router-dom"

export default class Nav extends Component {
  render() {
    return (
      <Link to ='/mesaj1'>
      <div className="nav">
        <div className="nav__blocks">
        </div>
        <div className="nav__blocks"></div>
        <div className="nav__blocks"></div>
      </div>
      </Link>
    );
  }
}
