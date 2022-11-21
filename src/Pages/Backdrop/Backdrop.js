import React, { useEffect } from "react";
import styles from './Backdrop.module.css';


const Backdrop = (props)  => {

    // useEffect(() => {
    //     console.log('BackDrop')
    // }, [])

    return (
        <div className={props.trigger ? styles.Backdrop : null} onClick={props.click}>

        </div>
    )
        

}

export default React.memo(Backdrop);
