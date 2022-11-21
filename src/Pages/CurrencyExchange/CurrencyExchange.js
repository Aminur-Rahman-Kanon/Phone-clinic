import React, { Component } from 'react';
import axios from 'axios';
import styles from './CurrencyExchange.module.css';


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
    BIH: 'Bosnia-Herzegovina',
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





class CurrencyExchange extends Component {

    state = {

        rates: {},

        from: '',

        to: '',

        amount: '',

        result: '',

        sameCurrency: false,

        btnDisable: true

    }

    componentDidMount () {
        window.scrollTo(0, 0);
        
        axios.get('https://openexchangerates.org/api/latest.json?app_id=02e19846c5224d9aa04c14a35ddf86c5')
        .then(res => {
            const initValue = res.data.rates['AED']
            this.setState({ rates: res.data.rates, from: initValue.toString()})
        }).catch(err => {
            console.log(err);
        })
    }

    SelectCountry (event, type) {
        const copyState = {...this.state};

        let item = copyState[type];

        let check = null;

        item = event.target.value;

        copyState[type] = item;

        if (copyState.from === copyState.to){
            check = true;
        }
        else {
            check = false;
        }

        copyState['sameCurrency'] = check;

        console.log(check)
        
        this.setState({...copyState})
    }

    getResult () {

        const from = this.state.from;

        const to = this.state.to;

        const amount = this.state.amount;

        const results = ((to * amount) / from).toFixed(2);

        this.setState({ result: results });
    }

    render () {

        console.log(this.state);

        const countries = Object.keys(data).map(item => {
            return <option key={item} value={this.state.rates[item]}>{data[item]}</option>
        })

        return (
            <div className={styles.Main}>

                <div className={styles.Details}>
                    <h2 className={styles.h2}>The Best and fastest way to Exchange currrencies</h2>

                    <p className={styles.p}>At Phone Clinic, We offer currency exchange from almost all currrencies. We Proud to offer
                        the best and the most updated rates in this area. You can check the price before you come to the store.
                        All you have to do is, Select the currency you want to convert from and select the currency you want to
                        convert to and the amount you wish to convert. That's It.
                    </p>

                </div>
                

                <div className={styles.Form}>
                    <form>
                        <div className={styles.Section}>
                            <label>From</label>
                            <select defaultValue={data['AED']} onChange={(event) => this.SelectCountry(event, 'from')}>
                                {countries}
                            </select>
                        </div>
                        
                        <div className={styles.Section}>
                            <label>To</label>
                            <select style={this.state.sameCurrency ? {border: '1px solid #ed8f8f', boxShadow: '0px 0px 11px 3px #ed8f8f'} : null} defaultValue={data['AFN']} onChange={(event) => this.SelectCountry(event, 'to')}>
                                {countries}
                            </select>
                        </div>

                        <div className={styles.Section}>
                            <label>Amount</label>
                            <input type="text" onChange={(event) => this.SelectCountry(event, 'amount')}/>
                        </div>

                        <div className={styles.Section}>
                            <h3>{this.state.result}</h3>
                        </div>

                        
                    </form>

                    <button disabled={this.state.sameCurrency ? true : false} 
                            onClick={() => this.getResult()}
                            className={this.state.sameCurrency ? styles.Button + ' ' + styles.Disable : styles.Button}
                            >Get Result</button>
                </div>


            </div>
        )
    }
}

export default CurrencyExchange;
