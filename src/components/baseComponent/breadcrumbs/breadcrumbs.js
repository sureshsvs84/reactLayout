/* eslint-disable linebreak-style */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Navbar, NavItem, Icon, Dropdown, Button,Col,Row } from "react-materialize";

class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
        this.state = {          
        };
    }
    render() {

        return (
          <Fragment>          
          <div id="breadcrumbs-wrapper">       
            <div className="header-search-wrapper grey lighten-2 hide-on-large-only">
              <input type="text" name="Search" className="header-search-input z-depth-2" placeholder="Explore Materialize"/>
            </div>
            <div className="container">
              <div className="row">
                <div className="col s10 m6 l6">
                  <h5 className="breadcrumbs-title">Blank Page</h5>
                  <ol className="breadcrumbs">
                    <li><a href="index-2.html">Dashboard</a></li>
                    <li><a href="#">Pages</a></li>
                    <li className="active">Blank Page</li>
                  </ol>
                </div>
                <div className="col s2 m6 l6">
                  <a className="btn dropdown-settings waves-effect waves-light breadcrumbs-btn right" href="#!" data-activates="dropdown1">
                    <i className="material-icons hide-on-med-and-up">settings</i>
                    <span className="hide-on-small-onl">Settings</span>
                    <i className="material-icons right">arrow_drop_down</i>
                  </a>
                  <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#!" className="grey-text text-darken-2">Access<span className="badge">1</span></a>
                    </li>
                    <li><a href="#!" className="grey-text text-darken-2">Profile<span className="new badge">2</span></a>
                    </li>
                    <li><a href="#!" className="grey-text text-darken-2">Notifications</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
        );
    }
}


export default (Breadcrumbs);