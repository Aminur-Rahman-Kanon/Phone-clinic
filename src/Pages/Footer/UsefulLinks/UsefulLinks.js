import React from "react";
import { Link } from 'react-router-dom'
import styles from './UsefulLinks.module.css';

const UsefulLinks = (props) => {

    // console.log('usefulLinks');

    return (
        <div className={styles.Main}>
            <h3>Useful Links</h3>
            <ul>
                <Link to="/">
                    <li>Privacy Policy</li>
                </Link>
                <Link to="/">
                    <li>Terms and Conditions</li>
                </Link>    
                <Link to="/">
                    <li>Disclaimer</li>
                </Link>    
                <Link to="/">
                    <li>Support</li>
                </Link>    
                <Link to="/">
                    <li>FAQ</li>
                </Link>
            </ul>
        </div>
    )
}

export default UsefulLinks;
