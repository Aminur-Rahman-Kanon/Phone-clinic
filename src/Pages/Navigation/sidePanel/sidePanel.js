import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import styles from './sidePanel.module.css';

function Login() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('loginUser'));

    if (user){
      setUser(user)
    }
    
  }, []);

  const logout = () => {
    sessionStorage.removeItem('loginUser');
    window.location.reload();
  }

  let displayUser = null;

  if (user){
    displayUser = <div className={styles.displayUserContainer}>
            <div className={styles.displayUserMain}>
              <div className={styles.displayUserAvatar}>
                <FontAwesomeIcon icon={faUserCircle} className={styles.displayUserImg}/>
              </div>

              <div className={styles.displayUserDetails}>
                <div className={styles.displayUserHeaders}>
                  <h4 className={styles.displayUserH4}>{user.firstName}</h4>
                  <h4 className={styles.displayUserH4}>{user.lastName}</h4>
                </div>
                <button className={styles.logOutBtn} onClick={logout}>Log out</button>
              </div>
            </div>
      </div>
  }

  else {
    displayUser = <div className={styles.sidePanelContainer}>
        <div className={styles.sidePanelItem}>
          <a href="/login" className={styles.sidePanelLink}>
            <FontAwesomeIcon icon={faUserCircle} className={styles.sidePanelIcon} />
            <p className={styles.sidePanelDetails}>Login</p>
          </a>
        </div>

        <div className={styles.sidePanelItem}>
          <a href="/register" className={styles.sidePanelLink}>
            <FontAwesomeIcon icon={faUserPlus} className={styles.sidePanelIcon} />
            <p className={styles.sidePanelDetails}>Register</p>
          </a>
        </div>
    </div>
  }

  return (
    <div>
      {displayUser}
    </div>
  )
}
export default Login;
