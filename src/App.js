import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Homepage/Homepage';
import MainComponent from './Pages/Repair/MainComponent/MainComponent';
import PhoneModels from './Pages/Repair/MainComponent/PhoneModels/PhoneModels';
import PcMain from './Pages/Shop/Pc/PcMain/PcMain';
import ItemDetails from './Pages/Shop/Pc/ItemDetails/ItemDetails';
import CurrencyConverter from './Pages/CurrencyConverter/CurrencyConverter';
import PhoneMain from './Pages/Shop/Phone/PhoneMain';
import InquiryForm from './Pages/Repair/InquiryForm/InquiryForm';
import CyberCafe from './Pages/Shop/CyberCafe/CyberCafe';
import AboutUs from './Pages/AboutUs/AboutUs';
import Aux from './Hoc/Aux/Aux';
import Toolbar from './Pages/Toolbar/Toolbar';
import Sidedrawer from './Pages/Sidedrawer/Sidedrawer';
import FooterMain from './Pages/Footer/FooterMain/FooterMain';
import StoreLocator from './Pages/StoreLocator/StoreLocator';
import CurrencyExchange from './Pages/CurrencyExchange/CurrencyExchange';
import { connect } from 'react-redux';


class App extends Component {

  render () {

    return (
      <Aux>
        <BrowserRouter>
            <div style={this.props.sideBar ? {position: 'fixed'}: {overflow: 'auto'}} className='App'>
              <Toolbar switchBar={this.props.toggleBackdrop}/>
              <Sidedrawer backdrop={this.props.backDropValue} 
                            toggleBackdrop={this.props.toggleBackdrop}
                            switch={this.props.sideBar}
                            />
              <Routes>
                <Route path="/" exact element={<HomePage />}/>

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
                
                {/* <Route path=':queryId/:deviceId/:itemId/appoinment' element={<InquiryForm />}/> */}

                <Route path="/other_services/currency_converter" element={<CurrencyConverter />}/>

                <Route path='/other_services/currency_exchange' element={<CurrencyExchange />} />

                <Route path='/other_services/cybercafe' element={<CyberCafe />}/>

                <Route path='/other_services/store_locator' element={<StoreLocator />} />

                <Route path='/aboutus' element={<AboutUs />} />

              </Routes>

              <FooterMain />
            </div>
        </BrowserRouter>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    backDropValue: state.backDropValue,
    sideBar: state.sideBar,
    phonePic: state.phonePic,
    brand: state.brand,
    phoneLogo: state.phoneLogo,
    tabletPic: state.tabletPic,
    tablet: state.tablet,
    laptop: state.laptop,
    laptopAccessoriesImgs: state.laptopAccessoriesImg,
    accessories: state.accessories,
    pcCategory: state.pcCategory,
    pcImage: state.pcImage,
    phonePic: state.phonePic,
    tabletPic: state.tabletPic,
    tabletImg: state.tabletImg,
    state: state
  }
}


const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch({ type: 'TOGGLE_SIDEBAR' }),
    toggleBackdrop: () => dispatch({ type: 'TOGGLE_BACKDROP'}),
    closeDrawer: () => dispatch({ type: 'CLOSE_DRAWER' })
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (App);
