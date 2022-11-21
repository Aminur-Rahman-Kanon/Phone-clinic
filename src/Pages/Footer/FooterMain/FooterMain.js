import React from 'react';
import QuickLinks from '../QuickLinks/QuickLinks';
import SocialLinks from '../SocialLinks/SocialLinks';
import UsefulLinks from '../UsefulLinks/UsefulLinks';
import WorkingHours from '../WorkingHours/WorkingHours';
import styles from './FooterMain.module.css';

const FooterMain = () => {

    // console.log('footerMain')

    return (
        <div className={styles.Main}>
            <SocialLinks />
            <QuickLinks />
            <UsefulLinks />
            <WorkingHours />
        </div>
    )
}


export default React.memo(FooterMain);
