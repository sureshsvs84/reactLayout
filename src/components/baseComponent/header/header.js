/* eslint-disable linebreak-style */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Navbar, NavItem, Icon, Dropdown, Button, Col, Row } from "react-materialize";
import logo from "../../../../public/assest/images/logo/Materialize-logo.png";
import profileImg from "../../../../public/assest/images/avatar/avatar-7.png";
import Logo from "../logo";
import Search from "../search";
import Notification from "../notification";
import HeaderMenu from "./headerMenu";
import ProfileDropDown from "../profileDropDown";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNotificationOpen:false,
            isdropDownOpen:false
        };
    }
    HeaderMenu = (props)=>(
        <div>asd</div>
    )
    toggleNotification = () =>{
        debugger;
        this.setState({isNotificationOpen:!this.state.isNotificationOpen});
    }
    toggleProfileDropDown = () =>{
        debugger;
        this.setState({isdropDownOpen:!this.state.isdropDownOpen});
    }

    render() {

        return (
          <Fragment>
            <header id="header" className="page-topbar">
              <div className="navbar-fixed">
                <nav className="navbar-color">
                  <div className="nav-wrapper">
                    <Logo brand={ logo }></Logo>
                     <Search/>
                    <HeaderMenu profileImg={profileImg} toggleNotifi={this.toggleNotification} toggleProfile={this.toggleProfileDropDown}/>
                    <Notification isNotification={this.state.isNotificationOpen}/>
                    <ProfileDropDown isprofileDropDown={this.state.isdropDownOpen}/>
                  </div>
                  </nav>
                </div>
            </header>
          </Fragment>
        );
    }
}

Header.propTypes = {   
};
Header.defaultProps = {
   
};

export default (Header);