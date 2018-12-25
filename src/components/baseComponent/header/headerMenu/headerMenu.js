/* eslint-disable linebreak-style */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        debugger;
        const { profileImg,toggleNotifi,toggleProfile} = this.props;
        return (
            <Fragment>
                <ul className="right hide-on-med-and-down">

                    <li>
                        <a href="javascript:void(0);" className="waves-effect waves-block waves-light toggle-fullscreen">
                            <i className="material-icons">settings_overscan</i>
                        </a>
                    </li>
                    <li>
                        <a onClick={toggleNotifi} className="waves-effect waves-block waves-light notification-button" data-activates="notifications-dropdown">
                            <i className="material-icons">notifications_none
                                <small className="notification-badge pink accent-2">5</small>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" onClick={toggleProfile} className="waves-effect waves-block waves-light profile-button" data-activates="profile-dropdown">
                            <span className="avatar-status avatar-online">
                                <img src={ profileImg } alt="avatar" />
                                <i></i>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-activates="chat-out" className="waves-effect waves-block waves-light chat-collapse">
                            <i className="material-icons">format_indent_increase</i>
                        </a>
                    </li>
                </ul>
            </Fragment>
        );
    }
}


export default (HeaderMenu);