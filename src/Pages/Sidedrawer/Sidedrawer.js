import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import styles from './Sidedrawer.module.css';
import Aux from "../../Hoc/Aux/Aux";
import Backdrop from '../Backdrop/Backdrop'
import Login from "../Navigation/Login/login";

const SideDrawer = (props) => {

    return (
        <Aux>
            <Backdrop trigger={props.backdrop} click={props.toggleBackdrop}/>
            <div className={props.switch ? styles.Sidedrawer : styles.Off}>
                <div className={styles.Logo}>
                    <Logo />
                </div>

                <div className={styles.login}>
                    <Login />
                </div>

                <nav className={styles.Nav}>
                    <NavigationItems navigationPath={props.navPath}/>
                </nav>
            </div>
        </Aux>
    )
}

export default React.memo(SideDrawer);
