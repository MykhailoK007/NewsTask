import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className={"level " + classes.header}>
            <p className="level-item has-text-centered">
                <NavLink to="/" className="link is-info has-text-white">Home</NavLink>
            </p>
            <p className="level-item has-text-centered">
                <NavLink  to = "/profile" className="link is-info has-text-white">Profile</NavLink>
            </p>
            <p className="level-item has-text-centered">
                <NavLink to = "/news" className="link is-info has-text-white">News</NavLink>
            </p>
        </nav>
    )
}
export default Header;