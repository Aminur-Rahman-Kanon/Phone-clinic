import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationItem.module.css';
import { connect } from 'react-redux';


class NavigationItem extends Component {


    render () {
        let nestedLink = null;
        let dir = window.location.pathname.split('/')

        
        if (this.props.child === 'repairs'){
            nestedLink = <li className={styles.NavigationItem}>
                <ul className={styles.nestedLink}>
                    <Link to="/repair/phone" onClick={this.props.closeDrawer} className={dir[1] === 'repair' && dir[2] === 'phone' ? styles.active : null}>
                        Phone
                    </Link>
    
                    <Link to="/repair/tablet" onClick={this.props.closeDrawer} className={dir[1] === 'repair' && dir[2] === 'tablet' ? styles.active : null}>
                        Tablet
                    </Link>
                    
                    <Link to="/repair/laptop" onClick={this.props.closeDrawer} className={dir[1] === 'repair' && dir[2] === 'laptop' ? styles.active : null}>
                        Laptop
                    </Link>
                </ul>
                <button className={this.props.active? styles.active : null}>{this.props.children}</button>
            </li>
        }
        else if (this.props.child === 'sale'){
            nestedLink = <li className={styles.NavigationItem}>
                <ul className={styles.nestedLink} >
                    <Link to="/sale/phone" onClick={this.props.closeDrawer} className={dir[1] === 'sale' && dir[2] === 'phone' ? styles.active : null}>
                        Phone
                    </Link>
    
                    <Link to="/sale/tablet" onClick={this.props.closeDrawer} className={dir[1] === 'sale' && dir[2] === 'tablet' ? styles.active : null}>
                        Tablet
                    </Link>
                    
                    <Link to="/sale/laptop" onClick={this.props.closeDrawer} className={dir[1] === 'sale' && dir[2] === 'laptop' ? styles.active : null}>
                        Laptop
                    </Link>
                </ul>
                <button className={this.props.active? styles.active : null} >{this.props.children}</button>
            </li>
        }
        else if (this.props.child === 'accessories'){
            nestedLink = <li className={styles.NavigationItem}>
                <ul className={styles.nestedLink} >
                    <Link to="/accessories/phone" onClick={this.props.closeDrawer} className={dir[1] === 'accessories' && dir[2] === 'phone' ? styles.active : null}>
                        Phone
                    </Link>
    
                    <Link to="/accessories/tablet" onClick={this.props.closeDrawer} className={dir[1] === 'accessories' && dir[2] === 'tablet' ? styles.active : null}>
                        Tablet
                    </Link>
                    
                    <Link to="/accessories/laptop" onClick={this.props.closeDrawer} className={dir[1] === 'accessories' && dir[2] === 'laptop' ? styles.active : null}>
                        Laptop
                    </Link>
                </ul>
                <button className={this.props.active? styles.active : null} >{this.props.children}</button>
            </li>
        }
        else if (this.props.child === 'other_services'){
            nestedLink = <li className={styles.NavigationItem}>
                <ul className={styles.nestedLink} >
                    <Link to="/other_services/currency_converter" onClick={this.props.closeDrawer} className={dir[1] === 'other_services' && dir[2] === 'currency_converter' ? styles.active : null}>
                        Money Transfer
                    </Link>
    
                    <Link to="/other_services/currency_exchange" onClick={this.props.closeDrawer} className={dir[1] === 'other_services' && dir[2] === 'currency_exchange' ? styles.active : null}>
                        Currency Exchange
                    </Link>
                    
                    <Link to="/other_services/cybercafe" onClick={this.props.closeDrawer} className={dir[1] === 'other_services' && dir[2] === 'cybercafe' ? styles.active : null}>
                        Cyber Cafe
                    </Link>

                    <Link to="/other_services/store_locator" onClick={this.props.closeDrawer} className={dir[1] === 'other_services' && dir[2] === 'store_locator' ? styles.active : null}>
                        Store Locator
                    </Link>
                </ul>
                <button className={this.props.active? styles.active : null} >{this.props.children}</button>
            </li>
        }
        else {
            nestedLink = <li className={styles.NavigationItem}>
                <Link to={this.props.link} className={this.props.active? styles.active : null} onClick={this.props.closeDrawer}>
                    {this.props.children}
                </Link>
            </li>
        }

    
        return (
            nestedLink
        )

    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeDrawer: () => dispatch({ type: 'CLOSE_DRAWER'})
    }
}

export default connect(null, mapDispatchToProps) (NavigationItem);
