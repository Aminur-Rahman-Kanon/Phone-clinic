import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../Hoc/Aux/Aux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCheckCircle, faAward } from '@fortawesome/free-solid-svg-icons';
import aos from 'aos';
import 'aos/dist/aos.css';
import styles from './CurrencyConverter.module.css';

const data=  {
    AED: 'United Arab Emirates Dirham',
    AFN: 'Afghanistan Afghani',
    ALL: 'Albania Lek',
    AMD: 'Armenia Dram',
    ANG: 'Netherlands Antilles Guilder',
    AOA: 'Angola Kwanza',
    ARS: 'Argentina Peso',
    AUD: 'Australia Dollar',
    AWG: 'Aruba Guilder',
    AZN: 'Azerbaijan Manat',
    BAM: 'Bosnia and Herzegovina Convertible Mark',
    BBD: 'Barbados Dollar',
    BDT: 'Bangladesh Taka',
    BGN: 'Bulgaria Lev',
    BHD: 'Bahrain Dinar',
    BIF: 'Burundi Franc',
    BMD: 'Bermuda Dollar',
    BND: 'Brunei Darussalam Dollar',
    BOB: 'Bolivia Bolíviano',
    BRL: 'Brazil Real',
    BSD: 'Bahamas Dollar',
    BTC: 'Bitcoin Currency',
    BTN: 'Bhutan Ngultrum',
    BWP: 'Botswana Pula',
    BYN: 'Belarus Ruble',
    BYR: 'Belarusian Ruble',
    BZD: 'Belize Dollar',
    CAD: 'Canada Dollar',
    CDF: 'Congo/Kinshasa Franc',
    CHF: 'Switzerland Franc',
    CLF: 'Chilean Peso',
    CLP: 'Chile Peso',
    CNY: 'China Yuan Renminbi',
    COP: 'Colombia Peso',
    CRC: 'Costa Rica Colon',
    CUC: 'Cuba Convertible Peso',
    CUP: 'Cuba Peso',
    CVE: 'Cape Verde Escudo',
    CZK: 'Czech Republic Koruna',
    DJF: 'Djibouti Franc',
    DKK: 'Denmark Krone',
    DOP: 'Dominican Republic Peso',
    DZD: 'Algeria Dinar',
    EGP: 'Egypt Pound',
    ERN: 'Eritrea Nakfa',
    ETB: 'Ethiopia Birr',
    ETH: 'Ethereum',
    EUR: 'Euro Member Countries',
    FJD: 'Fiji Dollar',
    FKP: 'Falkland Islands (Malvinas) Pound',
    GBP: 'United Kingdom Pound',
    GEL: 'Georgia Lari',
    GGP: 'Guernsey Pound',
    GHS: 'Ghana Cedi',
    GIP: 'Gibraltar Pound',
    GMD: 'Gambia Dalasi',
    GNF: 'Guinea Franc',
    GTQ: 'Guatemala Quetzal',
    GYD: 'Guyana Dollar',
    HKD: 'Hong Kong Dollar',
    HNL: 'Honduras Lempira',
    HRK: 'Croatian kuna',
    HRV: 'Ukrainian hryvnia',
    HTG: 'Haiti Gourde',
    HUF: 'Hungary Forint',
    IDR: 'Indonesia Rupiah',
    ILS: 'Israel Shekel',
    IMP: 'Isle of Man Pound',
    INR: 'India Rupee',
    IQD: 'Iraq Dinar',
    IRR: 'Iran Rial',
    ISK: 'Iceland Krona',
    JEP: 'Jersey Pound',
    JMD: 'Jamaica Dollar',
    JOD: 'Jordan Dinar',
    JPY: 'Japan Yen',
    KES: 'Kenya Shilling',
    KGS: 'Kyrgyzstan Som',
    KHR: 'Cambodia Riel',
    KMF: 'Comorian Franc',
    KPW: 'Korea (North) Won',
    KRW: 'Korea (South) Won',
    KWD: 'Kuwait Dinar',
    KYD: 'Cayman Islands Dollar',
    KZT: 'Kazakhstan Tenge',
    LAK: 'Laos Kip',
    LBP: 'Lebanon Pound',
    LKR: 'Sri Lanka Rupee',
    LRD: 'Liberia Dollar',
    LSL: 'Lesotho Loti',
    LTL: 'Lithuanian litas',
    LTC: 'Litecoin',
    LVL: 'Latvian Lats',
    LYD: 'Libya Dinar',
    MAD: 'Morocco Dirham',
    MDL: 'Moldova Leu',
    MGA: 'Madagascar Ariary',
    MKD: 'Macedonia Denar',
    MMK: 'Myanmar (Burma) Kyat',
    MNT: 'Mongolia Tughrik',
    MOP: 'Macau Pataca',
    MRO: 'Mauritanian Ouguiya',
    MRU: 'Mauritania Ouguiya',
    MUR: 'Mauritius Rupee',
    MVR: 'Maldives Rufiyaa',
    MWK: 'Malawi Kwacha',
    MXN: 'Mexico Peso',
    MYR: 'Malaysia Ringgit',
    MZN: 'Mozambique Metical',
    NAD: 'Namibia Dollar',
    NGN: 'Nigeria Naira',
    NIO: 'Nicaragua Cordoba',
    NOK: 'Norway Krone',
    NPR: 'Nepal Rupee',
    NZD: 'New Zealand Dollar',
    OMR: 'Oman Rial',
    PAB: 'Panama Balboa',
    PEN: 'Peru Sol',
    PGK: 'Papua New Guinea Kina',
    PHP: 'Philippines Peso',
    PKR: 'Pakistan Rupee',
    PLN: 'Poland Zloty',
    PYG: 'Paraguay Guarani',
    QAR: 'Qatar Riyal',
    RON: 'Romania Leu',
    RSD: 'Serbia Dinar',
    RUB: 'Russia Ruble',
    RWF: 'Rwanda Franc',
    SAR: 'Saudi Arabia Riyal',
    SBD: 'Solomon Islands Dollar',
    SCR: 'Seychelles Rupee',
    SDG: 'Sudan Pound',
    SEK: 'Sweden Krona',
    SGD: 'Singapore Dollar',
    SHP: 'Saint Helena Pound',
    SLL: 'Sierra Leone Leone',
    SOS: 'Somalia Shilling',
    SPL: 'Seborga Luigino',
    SRD: 'Suriname Dollar',
    SSP: 'South Sudanese pound',
    STD: 'São Tomé and Príncipe dobra',
    STN: 'São Tomé and Príncipe Dobra',
    SVC: 'El Salvador Colon',
    SYP: 'Syria Pound',
    SZL: 'eSwatini Lilangeni',
    THB: 'Thailand Baht',
    TJS: 'Tajikistan Somoni',
    TMT: 'Turkmenistan Manat',
    TND: 'Tunisia Dinar',
    TOP: 'Tonga Pa anga',
    TRY: 'Turkey Lira',
    TTD: 'Trinidad and Tobago Dollar',
    TVD: 'Tuvalu Dollar',
    TWD: 'Taiwan New Dollar',
    TZS: 'Tanzania Shilling',
    UAH: 'Ukraine Hryvnia',
    UGX: 'Uganda Shilling',
    URY: 'Peso Uruguayo',
    USD: 'United States Dollar',
    UYU: 'Uruguay Peso',
    UZS: 'Uzbekistan Som',
    VEF: 'Venezuela Bolívar',
    VND: 'Viet Nam Dong',
    VUV: 'Vanuatu Vatu',
    WST: 'Samoa Tala',
    XAF: 'Central African CFA Franc',
    XAG: 'Silver Exchange Rate (ISO)',
    XAU: 'XAU/USD, GOLD',
    XCD: 'East Caribbean Dollar',
    XDR: 'IMF Special Drawing Rights',
    XOF: 'West African CFA Franc',
    XPF: 'Comptoirs Français du Pacifique',
    XRP: 'Ripple',
    YER: 'Yemen Rial',
    ZAR: 'South Africa Rand',
    ZMK: 'Zambian kwacha',
    ZMW: 'Zambia Kwacha',
    ZWD: 'Zimbabwe Dollar ',
    ZWL: 'Zimbabwean dollar'
}

class CurrencyConverter extends Component {

    state = {
        default: 'Select A Country',
        rate: {},
        selectValue: '',
        inputValue: '',
        queryResult: '',
        url: '/freecurrencyapi.net/api/v2/latest?apikey=cfaac5f0-8125-11ec-ad91-b75c453dc9f3',
        loader : true
    }

    componentDidMount () {
        axios.get('https://phoneclinic.herokuapp.com/https://freecurrencyapi.net/api/v2/latest?apikey=cfaac5f0-8125-11ec-ad91-b75c453dc9f3')
        .then(res => {
            this.setState({rate: res.data.data, loader: false})
        }).catch(error => {
            console.log(error);
        })

        window.scrollTo(0, 0);

        aos.init({duration: 1300});
    }

    getResult = (event) => {
        const reg = new RegExp('^[0-9]*$');
        if (reg.test(event.target.value)){
            // console.log(this.state.inputValue);
            this.setState({inputValue: event.target.value})
        }
        else{
            alert('Please Enter Numbers Only');
        }
    }

    selectCountry = (event) => {
        this.setState({selectValue: event.target.value})
    }

    getQuery = () => {
        const gbp = this.state.rate.GBP;
        const selectCountryRate = this.state.rate[this.state.selectValue];
        let result = ((selectCountryRate*this.state.inputValue) / gbp).toFixed(2);
        this.setState({queryResult: result});
    }

    render () {

        const option = Object.keys(this.state.rate).sort().map(item => {
            return <option key={item} value={item}>{data[item]}</option>
        })

        let mainDisplay = Object.keys(this.state.rate).length !== 0 ? <div data-aos="fade-left" data-aos-easing="ease-out-cubic" className={styles.Details}>
                        <h1>Send Money From The UK</h1>
                        <h3>Send money to all over the world via trusted company from our shop</h3>
                        <div className={styles.SubDetails}>
                            <div className={styles.Input}>
                                <select defaultValue="" onChange={this.selectCountry} required>
                                    <option disabled={true} value="">Select A Country</option>
                                    {option}
                                </select>
        
                                <input type="text" value={this.state.inputValue}
                                                    onChange={this.getResult}
                                                    placeholder='Amount'/>
                            </div>
                            
                            <div className={styles.Query}>
                                <h2>{this.state.queryResult}</h2>
                            </div>
                            
                            <button className={this.state.inputValue === '' || this.state.selectValue === '' ? styles.btnDisabled : styles.btn}
                                    disabled={ this.state.inputValue === '' || this.state.selectValue === '' ? true : false }
                                    onClick={this.getQuery}>Check Rates</button>

                        </div>    
                    </div> : null
        
        return (
            <Aux>

                <div className={styles.Main}>
                    {mainDisplay}
                    <div style={{display: this.state.loader ? 'flex' : 'none'}} className={styles.loading}>
                        <div className={styles.loader}></div>
                    </div>
                </div>

                <div className={styles.HeadingMain}>
                    <h1>Send Money securely with us</h1>

                    <div className={styles.Heading}>
                        <div>
                            <FontAwesomeIcon className={styles.Font} icon={faAward} size='4x' />
                            <h2>Trusted Brands</h2>
                            <p>Send money with the top trusted company.</p>
                        </div>

                        <div>
                            <FontAwesomeIcon className={styles.Font} icon={faCheckCircle} size='4x'/>
                            <h2>Hassle Free</h2>
                            <p>Sending money from our shop is completely hassle free.</p>
                        </div>

                        <div>
                            <FontAwesomeIcon className={styles.Font} icon={faShieldAlt} size='4x' />
                            <h2>Secure Transaction</h2>
                            <p>All our transaction is 100% secure and your information will be safe.</p>
                        </div>
                    </div>
                </div>

            </Aux>
        )

    }

}

export default CurrencyConverter;
