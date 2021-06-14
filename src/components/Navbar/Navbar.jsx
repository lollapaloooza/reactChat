import classes from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={classes.AppNavbar}>
            <ul>
                <li className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.ActiveLink}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink activeClassName={classes.ActiveLink} to="/dialogs">Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink activeClassName={classes.ActiveLink} to="/news">News</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink activeClassName={classes.ActiveLink} to="/music">Music</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink activeClassName={classes.ActiveLink} to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;