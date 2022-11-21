import React, { Component } from "react";
import PhoneModel  from "./Phonemodel/Phonemodel";
import { Link } from "react-router-dom"; 
import styles from './PhoneModels.module.css';
import GetAquote from "../../../../Extra/GetAqoute/GetAquote";
import { connect } from 'react-redux';
import withParams from "../../../../Hoc/Aux/withparams/withParams";


class PhoneModels extends Component {

    
    componentDidMount(){
        window.scrollTo(0, 0);

        console.log('phoneModels');
    }

    render () {

        let { deviceId, itemId} = this.props.params;
        let display = null;
        let img = null;

        if (deviceId === 'phone') {

            img = <img src={this.props.phonePic[itemId]} alt={itemId} />

            display = Object.keys(this.props.phone).map(item => {
                console.log(item);
                return item === itemId ?
                    this.props.phone[item].map((igkey, index) => {
                        let dir = `/repair/${deviceId}/${item}/${igkey}/inquiry`;                    
                        return <Link key={index} to={dir}>
                                <PhoneModel key={igkey} device={igkey} />
                            </Link>
                    }) : null;
            })
        }
        
        if (deviceId === 'tablet') {

            img = <img src={this.props.tabletPic[itemId]} alt={itemId} />

            display = Object.keys(this.props.tablet).map(item => {
                return item === itemId ?
                    this.props.tablet[item].map((igkey, index) => {
                        let dir = `/repair/${deviceId}/${item}/${igkey}/inquiry`;                    
                        return <Link key={index} to={dir}>
                                <PhoneModel key={igkey} device={igkey} />
                            </Link>
                    }) : null;
            })
        }
        
        return (
            <div className={styles.Main}>
                
                <div className={styles.PicMain}>
                    <div className={styles.Pic}>
                    {img}
                    </div>
                </div>

                <div className={styles.Mobile}>
                    {display}
                </div>

                <GetAquote />

            </div>
        )
    }
    
    
}

const mapStateToProps = state => {
    return {
        phone: state.brand,
        phonePic: state.phonePic,
        tablet: state.tablet,
        tabletPic: state.tabletPic
    }
}

export default connect(mapStateToProps) (withParams(PhoneModels));
