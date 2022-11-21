import React from "react";
import styles from './Phonemodel.module.css';

const phoneModel = (props) => {

    console.log(props.device);

    return (
        <div className={styles.Main}>
            <h2>{props.device}</h2>
            <p>View Options </p>
        </div>
    )
}

export default React.memo(phoneModel);
