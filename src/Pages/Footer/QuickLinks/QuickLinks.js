import React from "react";
import { Link } from "react-router-dom";
import styles from './QuickLinks.module.css';

const QuickLinks = () => {

    return (
        <div className={styles.Main}>
            <h3>Quick Links</h3>
            <ul>
                <Link to="/aboutus">
                    <li>About Us</li>
                </Link>

                <Link to="/service" >
                    <li>Services</li>
                </Link>

                <Link to="repair/phone/apple/appoinment">
                    <li>Appoinment</li>
                </Link>

                <Link to="/contact">
                    <li>Contact</li>
                </Link>

                <Link to="/other_services/store_locator">
                    <li>Store Locator</li>
                </Link>
                
            </ul>
        </div>
    )
}

export default QuickLinks;
