import React from 'react';
import { SpinnerRoundFilled } from 'spinners-react';
import styles from './spinner.module.css';

function spinner(props) {

    if (!props.switch) return null;

  return (
    <div className={styles.spinnerMain}>
      <SpinnerRoundFilled size={90} thickness={139} speed={99} color="rgba(57, 128, 172, 1)" />
    </div>
  )
}

export default spinner
