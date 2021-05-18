import React, { Component } from "react";
import { Link } from "react-router-dom";
/*------------------------------------------*/
import PersonalCenter from "../PersonalCenter.js";
import './Header.css'
/*------------------------------------------*/
export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
          <div className="title-box">
            <h1 className="title-blog">
              <Link to={PersonalCenter} style={{color:"lightsteelblue"}}>用户的个人论坛中心</Link>
            </h1>
          </div>
      </div>
    );
  }
}
