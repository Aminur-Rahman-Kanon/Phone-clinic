import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Homepage/Homepage';
import MainComponent from './Pages/Repair/MainComponent/MainComponent';
import PhoneModels from './Pages/Repair/MainComponent/PhoneModels/PhoneModels';
import PcMain from './Pages/Shop/Pc/PcMain/PcMain';
import CurrencyConverter from './Pages/CurrencyConverter/CurrencyConverter';
import PhoneMain from './Pages/Shop/Phone/PhoneMain';
import InquiryForm from './Pages/Repair/InquiryForm/InquiryForm';
import CyberCafe from './Pages/Shop/CyberCafe/CyberCafe';
import AboutUs from './Pages/AboutUs/AboutUs';
import Toolbar from './Pages/Toolbar/Toolbar';
import Sidedrawer from './Pages/Sidedrawer/Sidedrawer';
import FooterMain from './Pages/Footer/FooterMain/FooterMain';
import StoreLocator from './Pages/StoreLocator/StoreLocator';
import CurrencyExchange from './Pages/CurrencyExchange/CurrencyExchange';
import Registration from './Pages/Registration/registration';
import Login from './Pages/Login/login';

class App extends Component {

  state = {
    backdrop: false,
    sidebar: false
  }

  toggleBackdrop = () => {
    this.setState({ backdrop: !this.state.backdrop, sidebar: !this.state.sidebar})
  }

  render () {
    return (
      <>
        <BrowserRouter>
            <div style={this.state.sidebar ? {overflow: 'hidden', width: '100%'} : {overflow: 'auto', width:'100%'}} className='App'>
              <Toolbar switchBar={this.toggleBackdrop}/>
              <Sidedrawer backdrop={this.state.backdrop} 
                            toggleBackdrop={this.toggleBackdrop}
                            switch={this.state.sidebar}
                            />
              <Routes>
                <Route path="/" exact element={<HomePage />}/>

                <Route path='/register' element={<Registration />}/>

                <Route path="/login" element={<Login />} />

                <Route path='/service' element={<HomePage service={true} />} />

                <Route path='/inquiry' element={<InquiryForm />} />

                <Route path='/contact' element={<AboutUs />}/>

                <Route path="/phone" element={<PhoneMain device="phone" />}/>

                <Route path="/tablet" element={<PhoneMain device="tablet" />}/>

                <Route path="/laptop" element={<PhoneMain device="laptop" />}/>

                <Route path='repair/:deviceId' element={<MainComponent />}/>

                <Route path='repair/:deviceId/:itemId' element={<PhoneModels />}/>

                <Route path=':queryId/:deviceId' element={<PcMain />}/>

                <Route path=':queryId/:deviceId/:itemId/:model/inquiry' element={<InquiryForm />}/>

                <Route path=':queryId/:deviceId/:itemId/inquiry' element={<InquiryForm />}/>

                <Route path="/other_services/currency_converter" element={<CurrencyConverter />}/>

                <Route path='/other_services/currency_exchange' element={<CurrencyExchange />} />

                <Route path='/other_services/cybercafe' element={<CyberCafe />}/>

                <Route path='/other_services/store_locator' element={<StoreLocator />} />

                <Route path='/aboutus' element={<AboutUs />} />

              </Routes>

              <FooterMain />
            </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
