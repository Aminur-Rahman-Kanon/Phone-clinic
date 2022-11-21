import React, { useEffect } from "react";
import DrawToggle from "../Drawtoggle/Drawtoggle";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import Login from "../Navigation/Login/login";
import styles from './Toolbar.module.css';

const Toolbar = (props) => {

    return (
        <div className={styles.Toolbar}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
            <div className={styles.login}>
                <Login />
            </div>
            <DrawToggle switch={props.switchBar}/>
        </div>
    )
}

export default Toolbar;
