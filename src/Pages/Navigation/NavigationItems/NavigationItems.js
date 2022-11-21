import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import styles from './NavigationItems.module.css';

const NavigationItems = () => {

    const dirName = window.location.pathname.split('/');

    return (
        <nav className={styles.NavigationItems}>
            <ul className={styles.ItemsLink}>

                <NavigationItem active={dirName[1] === '' ? true: false} link="/">Home</NavigationItem>

                <NavigationItem dir1={dirName[1]} dir2={dirName[2]} active={dirName[1] === 'repair' ? true: false} child="repairs" >Repairs</NavigationItem>

                <NavigationItem dir1={dirName[1]} dir2={dirName[2]} active={dirName[1] === 'sale' ? true: false} child="sale" >Sale</NavigationItem>

                <NavigationItem dir1={dirName[1]} dir2={dirName[2]} active={dirName[1] === 'accessories' ? true: false} child="accessories" >Accessories</NavigationItem>

                <NavigationItem dir1={dirName[1]} dir2={dirName[2]} active={dirName[1] === 'other_services' ? true: false} child="other_services" >Other Services</NavigationItem>

                <NavigationItem active={dirName[1] === 'aboutus' ? true: false} link="/aboutus">About Us</NavigationItem>

            </ul>
        </nav>
    )
}

export default NavigationItems;
