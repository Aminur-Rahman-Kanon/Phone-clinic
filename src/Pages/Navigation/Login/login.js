import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import styles from './login.module.css';

function login() {

  return (

    <div className={styles.loginContainer}>
        <div className={styles.loginItem}>
            <FontAwesomeIcon icon={faUserCircle} className={styles.loginIcon} />
            <p className={styles.loginDetails}>Login</p>
        </div>

        <div className={styles.loginItem}>
            <FontAwesomeIcon icon={faUserPlus} className={styles.loginIcon} />
            <p className={styles.loginDetails}>Register</p>
        </div>
    </div>
  )
}

export default login
