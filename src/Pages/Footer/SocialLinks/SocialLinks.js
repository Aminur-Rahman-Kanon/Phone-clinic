import React, { useEffect } from "react";
import styles from './SocialLinks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'



const SocialLinks = () => {

    // console.log('socialLinks');

    return (
        <div className={styles.Main}>
            <h2>Phone Clinic</h2>
            <p>Follow Us</p>
            <ul>
                <li><a href='/'><FontAwesomeIcon id={styles.fb} style={{height: '35px', width: '35px'}} icon={faFacebook}/></a></li>
                <li><a href='/'><FontAwesomeIcon id={styles.yt} style={{height: '35px', width: '35px'}} icon={faYoutube}/></a></li>
                <li><a href='/'><FontAwesomeIcon id={styles.in} style={{height: '35px', width: '35px'}} icon={faInstagram}/></a></li>
                <li><a href='/'><FontAwesomeIcon id={styles.tw} style={{height: '35px', width: '35px'}} icon={faTwitter}/></a></li>
            </ul>
        </div>
    )
}

export default SocialLinks;
