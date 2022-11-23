import React, { Component } from 'react';
import styles from './NavigationItem.module.css';

class NavigationItem extends Component {

    render () {
        let nestedLink = null;
        let dir = window.location.pathname.split('/')

        if (this.props.child === 'repairs'){
            nestedLink = <li className={styles.NavigationItem}>
                <ul className={styles.nestedLink}>
                    <a href="/repair/phone" onClick={this.props.closeDrawer} className={dir[1] === 'repair' && dir[2] === 'phone' ? styles.active : null}>
                        Phone
                    </a>
    
                    <a href="/repair/tablet" onClick={this.props.closeDrawer} className={dir[1] === 'repair' && dir[2] === 'tablet' ? styles.active : null}>
                        Tablet
                    </a>
                    
                    <a href="/repair/laptop" onClick={this.props.closeDrawer} className={dir[1] === 'repair' && dir[2] === 'laptop' ? styles.active : null}>
                        Laptop
                    </a>
                </ul>
                <button className={this.props.active? styles.active : null}>{this.props.children}</button>
            </li>
        }
        else if (this.props.child === 'sale'){
            nestedLink = <li className={styles.NavigationItem}>
                <ul className={styles.nestedLink} >
                    <a href="/sale/phone" onClick={this.props.closeDrawer} className={dir[1] === 'sale' && dir[2] === 'phone' ? styles.active : null}>
                        Phone
                    </a>
    
                    <a href="/sale/tablet" onClick={this.props.closeDrawer} className={dir[1] === 'sale' && dir[2] === 'tablet' ? styles.active : null}>
                        Tablet
                    </a>
                    
                    <a href="/sale/laptop" onClick={this.props.closeDrawer} className={dir[1] === 'sale' && dir[2] === 'laptop' ? styles.active : null}>
                        Laptop
                    </a>
                </ul>
                <button className={this.props.active? styles.active : null} >{this.props.children}</button>
            </li>
        }
        else if (this.props.child === 'accessories'){
            nestedLink = <li className={styles.NavigationItem}>
                <ul className={styles.nestedLink} >
                    <a href="/accessories/phone" onClick={this.props.closeDrawer} className={dir[1] === 'accessories' && dir[2] === 'phone' ? styles.active : null}>
                        Phone
                    </a>
    
                    <a href="/accessories/tablet" onClick={this.props.closeDrawer} className={dir[1] === 'accessories' && dir[2] === 'tablet' ? styles.active : null}>
                        Tablet
                    </a>
                    
                    <a href="/accessories/laptop" onClick={this.props.closeDrawer} className={dir[1] === 'accessories' && dir[2] === 'laptop' ? styles.active : null}>
                        Laptop
                    </a>
                </ul>
                <button className={this.props.active? styles.active : null} >{this.props.children}</button>
            </li>
        }
        else if (this.props.child === 'other_services'){
            nestedLink = <li className={styles.NavigationItem}>
                <ul className={styles.nestedLink} >
                    <a href="/other_services/currency_converter" onClick={this.props.closeDrawer} className={dir[1] === 'other_services' && dir[2] === 'currency_converter' ? styles.active : null}>
                        Money Transfer
                    </a>
    
                    <a href="/other_services/currency_exchange" onClick={this.props.closeDrawer} className={dir[1] === 'other_services' && dir[2] === 'currency_exchange' ? styles.active : null}>
                        Currency Exchange
                    </a>
                    
                    <a href="/other_services/cybercafe" onClick={this.props.closeDrawer} className={dir[1] === 'other_services' && dir[2] === 'cybercafe' ? styles.active : null}>
                        Cyber Cafe
                    </a>

                    <a href="/other_services/store_locator" onClick={this.props.closeDrawer} className={dir[1] === 'other_services' && dir[2] === 'store_locator' ? styles.active : null}>
                        Store Locator
                    </a>
                </ul>
                <button className={this.props.active? styles.active : null} >{this.props.children}</button>
            </li>
        }
        else {
            nestedLink = <li className={styles.NavigationItem}>
                <a href={this.props.link} className={this.props.active? styles.active : null} onClick={this.props.closeDrawer}>
                    {this.props.children}
                </a>
            </li>
        }

    
        return (
            nestedLink
        )

    }
}

export default NavigationItem
