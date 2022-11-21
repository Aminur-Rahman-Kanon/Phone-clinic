import React, { useState } from 'react';
import styles from './Modal.module.css';
import Aux from '../../Hoc/Aux/Aux';
import Backdrop from '../../Pages/Backdrop/Backdrop'

const Modal = (props) => {

    useState(() => {
        console.log('Modal');
    })

    return (
        <Aux>
            <Backdrop trigger={props.backDropValue} click={props.backDropToggle}/>
            {props.queryFail ? <div className={styles.Main}>
                <div className={styles.Sub}>
                    <h2>Something Went Wrong</h2>
                    <h3>Check Your Internet Connection</h3>
                    <h3>Or check if you have provided all the informations</h3>
                </div>
                <button className={styles.Btn}>Close</button>
            </div> : 
            
            <div className={styles.Main}>
                <div className={styles.Sub}>
                    <h2>Thank you Very Much</h2>
                    <h3>Your Query Has Been Sent</h3>
                    <h3>Give us Some Time, We will get back to you within An Hour</h3>
                </div>
                <button className={styles.Btn} onClick={props.backDropToggle} >Close</button>
            </div>
            }
        </Aux>
    )
}

export default Modal;
