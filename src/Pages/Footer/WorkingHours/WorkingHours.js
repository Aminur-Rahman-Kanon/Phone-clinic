import React from "react";
import styles from './WorkingHours.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons';

const WorkingHours = (props) => {

    // console.log('workingHours')

    return (
        <div className={styles.Main}>
            <h3>Working Hours</h3> 
            <ul>
                <li><FontAwesomeIcon icon={faClock}/><p>Monday-Saturday: 10AM-9PM</p></li>
                <li><FontAwesomeIcon icon={faClock}/><p>Sunday: 11AM-8PM</p></li>
            </ul>
        </div>
    )
}

export default WorkingHours;
