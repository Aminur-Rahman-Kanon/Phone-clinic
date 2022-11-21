import macbook from '../Assets/Images/shop/laptop/laptopLogo/apple.png';
import acer from '../Assets/Images/shop/laptop/laptopLogo/acer.png';
import dell from '../Assets/Images/shop/laptop/laptopLogo/dell.png';
import hp from '../Assets/Images/shop/laptop/laptopLogo/hp.png';
import samsungLaptop from '../Assets/Images/shop/laptop/laptopLogo/samsung.png';
import sonylaptop from '../Assets/Images/shop/laptop/laptopLogo/sony.png';
//phone Accessories
import charger from '../Assets/Images/Accessories/phoneAccessories/charger.png';
import cover from '../Assets/Images/Accessories/phoneAccessories/cover.png';
import headphone from '../Assets/Images/Accessories/phoneAccessories/headphone.png';
import screen from '../Assets/Images/Accessories/phoneAccessories/screen.png';
import wireless from '../Assets/Images/Accessories/phoneAccessories/wireless.png';
import powerBank from '../Assets/Images/Accessories/phoneAccessories/powerBank.png';
//laptop utilities images
import bag from '../Assets/Images/Accessories/pcAccesories/bag.png';
import ethernet from '../Assets/Images/Accessories/pcAccesories/ethernet.png';
import flash from '../Assets/Images/Accessories/pcAccesories/flash.png';
import hdrive from '../Assets/Images/Accessories/pcAccesories/hdd.png';
import hdmi from '../Assets/Images/Accessories/pcAccesories/hdmi.png';
import router from '../Assets/Images/Accessories/pcAccesories/modem.png';
import powerCord from '../Assets/Images/Accessories/pcAccesories/powerCord.png';
import ssd from '../Assets/Images/Accessories/pcAccesories/ssd.png';
//tablet accessories
import tabletCover from '../Assets/Images/tablet/accessories/cover.png';
import btKeyboard from '../Assets/Images/tablet/accessories/keyboard.png';
import protector from '../Assets/Images/tablet/accessories/protector.png';
import btSpeaker from '../Assets/Images/tablet/accessories/speaker.png';
import stand from '../Assets/Images/tablet/accessories/stand.png';

//Pc Images
import Keyboard from '../Assets/Images/Accessories/pcAccesories/keyboard.png';
import monitor from '../Assets/Images/Accessories/pcAccesories/monitor.png';
import mouse from '../Assets/Images/Accessories/pcAccesories/mouse.png';
import utilities from '../Assets/Images/Accessories/pcAccesories/utilities.png';
import ram from '../Assets/Images/Accessories/pcAccesories/ram.png';
import speaker from '../Assets/Images/Accessories/pcAccesories/speaker.png';
import hdd from '../Assets/Images/Accessories/pcAccesories/hdd.png';

//Phone Model Logo
import apple from '../Assets/Images/Logo/mobile/apple.png';
import asus from '../Assets/Images/Logo/mobile/asus.png';
import blackberry from '../Assets/Images/Logo/mobile/blackberry.png';
import htc from '../Assets/Images/Logo/mobile/htc.png';
import huawei from '../Assets/Images/Logo/mobile/huawei.png';
import lg from '../Assets/Images/Logo/mobile/lg.png';
import nexus from '../Assets/Images/Logo/mobile/nexus.png';
import nokia from '../Assets/Images/Logo/mobile/nokia.png';
import oneplus from '../Assets/Images/Logo/mobile/oneplus.png';
import pixel from '../Assets/Images/Logo/mobile/pixel.png';
import samsung from '../Assets/Images/Logo/mobile/samsung.png';
import sony from '../Assets/Images/Logo/mobile/sony.png';


//Phone Models Image
import iphone from '../Assets/Images/phoneRepair/iphone.png';
import Asus from '../Assets/Images/phoneRepair/asus.png';
import BlackBerry from '../Assets/Images/phoneRepair/blackberry.png';
import Htc from '../Assets/Images/phoneRepair/htc.png';
import Huawei from '../Assets/Images/phoneRepair/huawei.png';
import Lg from '../Assets/Images/phoneRepair/lg.png';
import Nexus from '../Assets/Images/phoneRepair/nexus.png';
import Nokia from '../Assets/Images/phoneRepair/nokia.png';
import OnePlus from '../Assets/Images/phoneRepair/oneplus.png';
import Pixel from '../Assets/Images/phoneRepair/pixel.png';
import Sony from '../Assets/Images/phoneRepair/sony.png';
import SamSung from '../Assets/Images/phoneRepair/samsung.png';
//Tablet Models Image
import amazonTab from '../Assets/Images/tablet/logo/amazon.png';
import asusTab from '../Assets/Images/tablet/logo/asus.png';
import googleTab from '../Assets/Images/tablet/logo/google.png';
import huaweiTab from '../Assets/Images/tablet/logo/huawei.png';
import ipadpro from '../Assets/Images/tablet/logo/ipad.png';
import lenovoTab from '../Assets/Images/tablet/logo/lenovo.png';
import microsoftTab from '../Assets/Images/tablet/logo/microsoft.png';
import samsungTab from '../Assets/Images/tablet/logo/samsung.png';
//Laptop Service Image
import battery from '../Assets/Images/Logo/Laptop/battery.png';
import keyboard from '../Assets/Images/Logo/Laptop/keyboard.png';
import notebook from '../Assets/Images/Logo/Laptop/notebook.png';
import power from '../Assets/Images/Logo/Laptop/power.png';
import recovery from '../Assets/Images/Logo/Laptop/recovery.png';
import touchpad from '../Assets/Images/Logo/Laptop/touchpad.png';


const initialState = {

    backDropValue: false,
    
    sideBar: false,

    classes: {
      html: {
        overflow: 'hidden'
      },

      body: {
        overflow: 'hidden'
      }
    },

    brand: {
      apple: ['iPhone 6', 'iPhone 6 Plus','iPhone 6s', 'iPhone 6s Plus', 'iPhone 7', 'iPhone 7 Plus', 'iPhone SE', 'iPhone 8', 'iPhone 8 Plus', 'iPhone X'
              , 'iPhone XS', 'iPhone XS Max', 'iPhone XR', 'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max', 'iPhone 12', 'iPhone 12 mini', 'iPhone 12 Pro',
                  'iPhone 12 Pro Max', 'iPhone 13', 'iPhone 13 Mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max'],
  
      samsung: ['Galaxy Note Series', 'Galaxy S Series', 'Galaxy A Series', 'Galaxy J Series', 'Galaxy Tab Series'],
      
      htc: ['HTC 10', 'HTC One M9', 'HTC U11', 'HTC U12'],
      
      sony: ['Sony Xperia XZ', 'Sony Xperia XZ Premium', 'Somy Xperia XA', 'Sony Xperia X Compact',
              'Sony Xperia X', 'Sony Xperia Z5 Premium', 'Sony Xperia Z5 Compact', 'Sony Xperia Z3 Plus/Z4',
                'Sony Xperia Z5', 'Sony Xperia Z3 Compact', 'Sony Xperia Z3', 'Sony Xperia Z2', 'Sony Xperia Z1 Compact',
              'Sony Xperia 10 Plus', 'Sony Xperia 10', 'Sony Xperia XZ2', 'Sony Xperia XZ3', 'Sony Xperia XA1 Ultra',
              'Sony Xperia XZ1', 'Sony Xperia XZ1 Compact'],
      
      lg: ['LG G5', 'LG K8(2016)', 'LG V30', 'LG V40', 'LG G4', 'LG G3', 'LG Nexus 5X'],
      
      nexus: ['LG Huawei P20', 'Huawei P30 lite', 'Huawei P40 lite', 'LG Nexus 5X'],
      
      nokia: ['Microsoft Nokia Lumia 1520', 'Microsoft Nokia Lumia 1320', 'Nokia 8', 'Nokia 6.1'],
      
      blackberry: ['Blackberry DTEK 60', 'Blackberry Key One', 'Blackberry Key Two', 'Blackberry DTEK 50', 'Blackberry Playbook'],
      
      pixel: ['Google Pixel 2', 'Google Pixel 2 XL', 'Google Pixel 3', 'Google Pixel 3 XL', 'Google Pixel 3A',
              'Google Pixel 3A XL', 'Google Pixel 4', 'Google Pixel 4 XL', 'Google Pixel 4A', 'Google Pixel 5', 'Google Pixel XL'],
      
      huawei: ['Huawei P20 Lite', 'Huawei P20 Pro', 'Huawei P30', 'Huawei P30 Pro', 'Huawei P40 5G', 'Huawei Honor 10',
              'Huawei Honor 9', 'Huawei Honor 9 Lite', 'Huawei P Smart', 'Huawei P Smart 2019', 'Huawei P Smart 2020',
              'Huawei P10', 'Huawei P9 Plus', 'Huawei P9 Lite', 'Huawei P9', 'Huawei Y6', 'Huawei Y7',
              'Huawei P8 Lite', 'Huawei P8 Lite(2017)', 'Huawei P20', 'Huawei P30 lite', 'Huawei P40 lite',
              'Huawei Honor 20 Lite', 'Huawei Honor 8', 'Huawei Honor 7', 'Huawei Honor 8X', 'Huawei Mate 20 Lite',
              'Huawei Mate 10 Pro', 'Huawei Mate 20', 'Huawei Mate 20 Pro'],
      
      oneplus: ['OnePlus 5', 'OnePlus 5T', 'OnePlus 6', 'OnePlus 6T', 'OnePlus 7 Pro', 'OnePlus 7T',
              'OnePlus 8Pro', 'OnePlus 8T', 'OnePlus 3T', 'OnePlus 3', 'OnePlus 7'],
  
      asus: ['ROG Phone 5s Pro', 'ROG Phone 5s', 'Zenfone 8 Flip', 'Zenfone 8', 'Zenfone 7 Pro', 'Zenfone 7',
              'Zenfone 6', 'Zenfone Live', 'Zenfone Max Plus', 'Zenfone Max Shot', 'Zenfone Max',
              'Zenfone Lite', 'ROG Phone ZS600KL', 'Zenfone 5z', 'Zenfone 5', 'Zenfone 4', 'Zenfone 4 Pro', 'Zenfone 4 Selfie',
              'Zenfone 4 Max', 'Zenfone 4 Max Pro']
    },


    tablet: {
      apple: ['Apple iPad Mini 2019', 'Apple iPad Pro 12.9"', 'Apple iPad 2018', 'Apple iPad Pro 10.5',
            'Apple iPad Pro 9.7', 'Apple iPad Pro', 'Apple iPad Mini 4', 'Apple iPad Mini 3', 'Apple iPad Air 2',
            'Apple iPad Mini 2013', 'Apple iPad Air', 'Apple iPad Mini', 'Apple iPad 4', 'Apple iPad 3',
            'Apple iPad 2'],
      samsung: ['SAMSUNG Galaxy Tab S7', 'Samsung Galaxy Tab S7+', 'Samsung Galaxy Tab S7 FE', 
                'Samsung Galaxy Tab S6 Lite', 'Samsung Galaxy Tab A7', 'Samsung Tab A7 Lite',
                'SAMSUNG Galaxy Tab A'],
      amazon: ['Amazon Fire HD 8 (2018)', 'Amazon Fire HD 10 (2017)', 'Amazon Fire 7 (2017)', 'Amazon Fire HD 8 (2017)',
              'Amazon Fire HD 8 (2016)', 'Amazon Fire Kids Edition', 'Amazon Fire HD 8', 'Amazon Fire HD 10',
              'Amazon Fire 7" (2015)', 'Amazon Fire HD Kids 7"', 'Amazon Kindle Fire HDX 8.9"', 'Amazon Kindle Fire HDX 7"'],
      lenovo: ['Lenovo E7', 'Lenovo E8', 'Lenovo E10', 'Lenovo M10', 'Lenovo P10', 'Lenovo Miix 630',
              'Lenovo Thinkpad X1', 'Lenovo Tab 7', 'Lenovo Yoga A12'],
      huawei: ['Huawei MediaPad M5 Pro', 'Huawei MediaPad M5 8.4 Tablet', 'Huawei MediaPad M5 Lite', 
              'Huawei MediaPad T3 10', 'Huawei MediaPad T3 8'],
      microsoft: ['Microsoft Surface Pro 6', 'Microsoft Surface Go', 'Microsoft Surface Book 2',
                'Microsoft Surface Pro (2017)', 'Microsoft Surface Pro 4', 'Microsoft Surface 3',
                'Microsoft Surface Pro 3', 'Microsoft Surface 2', 'Microsoft Surface Pro 2', 'Microsoft Surface Pro', 'Microsoft Surface RT'],
      asus: ['Asus ZenPad C 7.0', 'Asus ZenPad S 8.0', 'Asus Zenpad 10', 'Asus Transformer Book T100 Chi', 'Asus Transf. Book T300 Chi',
            'Asus Transformer Book T90 Chi', 'ASUS Transformer Pad TF103C', 'ASUS Transformer Pad TF103'],
      google: ['Google Pixel Slate', 'Google Pixel C', 'Google/HTC Nexus 9', 'Google/Asus Nexus 7 II',
              'Google/Samsung Nexus 10', 'Google/Asus Nexus 7 II']
    },

    accessories: {
      phone: {
        charger: 'Charger',
        cover: 'Cover',
        headphone: 'Headphone',
        screen: 'Screen',
        wireless: 'Wireless Charger',
        powerBank: 'Power Bank'
      },

      phoneImg: {
        charger: charger,
        cover: cover,
        headphone: headphone,
        screen: screen,
        wireless: wireless,
        powerBank: powerBank
      },

      tablet: {
        cover: 'Cover',
        keyboard: 'Keyboard',
        screenProtector: 'Screen Protector',
        speaker: 'Speaker',
        stand: 'Tablet Stand',
        headphone: 'Headphone'
      },

      tabletImg: {
        cover: tabletCover,
        keyboard: btKeyboard,
        screenProtector: protector,
        speaker: btSpeaker,
        stand: stand,
        headphone: headphone
      }
    },

    phoneLogo: {
      apple: apple,
      asus: asus,
      blackberry: blackberry,
      htc: htc, 
      huawei: huawei, 
      lg: lg, 
      nexus: nexus, 
      nokia: nokia, 
      oneplus: oneplus, 
      pixel: pixel, 
      samsung: samsung, 
      sony: sony
    },

    phonePic: {
      apple: iphone,
      asus: Asus,
      blackberry: BlackBerry,
      htc: Htc,
      huawei: Huawei,
      lg: Lg,
      nexus: Nexus,
      nokia: Nokia,
      oneplus: OnePlus,
      pixel: Pixel,
      samsung: SamSung,
      sony: Sony
    },
    

    tabletPic: {
      amazon: amazonTab,
      asus: asusTab,
      google: googleTab,
      huawei: huaweiTab,
      apple: ipadpro,
      lenovo: lenovoTab,
      microsoft: microsoftTab,
      samsung: samsungTab
    },

    

    laptop: {

      title: {
        battery: 'Battery Replacement',
        keyboard: 'Keyboard Replacement',
        screenRepair: 'Screen Repair',
        powerIssue: 'Charging Issue',
        dataRecovery: 'Data Recovery',
        touchpad: 'Touchpad Repair'
      },

      brand: {
        apple: 'Apple', acer: 'Acer', dell: 'Dell', hp: 'Hp', samsung: 'Samsung', sony: 'Sony'
      },

      logo: {
        apple: macbook,
        acer: acer,
        dell: dell,
        hp: hp,
        samsung: samsungLaptop,
        sony: sonylaptop
      },

      laptopPic: {
        battery: battery,
        keyboard: keyboard,
        screenRepair: notebook,
        powerIssue: power,
        dataRecovery: recovery,
        touchpad: touchpad
      }

    },

    laptopAccessoriesImg: {
      bag: bag,
      ethernet: ethernet,
      flash: flash,
      hdrive: hdrive,
      hdmi: hdmi,
      router: router,
      powerCord: powerCord,
      ssd: ssd
    },


    pcCategory: {
      keyboard: 'Keyboard',
      hdd: 'Hard Disk',
      monitor: 'Monitor',
      mouse: 'Mouse',
      utilities: 'Utilities',
      ram: 'Ram',
      speaker: 'Bluetooth Speaker'
    },

    pcImage: {
      keyboard: Keyboard,
      hdd: hdd,
      monitor: monitor,
      mouse: mouse,
      utilities: utilities,
      ram: ram,
      speaker: speaker
    }
}

const reducer = (state=initialState, action) => {

    if (action.type === 'TOGGLE_BACKDROP'){
        return {
            ...state,
            backDropValue: !state.backDropValue,
            sideBar: !state.sideBar
        }
    }

    if (action.type === 'CLOSE_DRAWER'){
      return {
        ...state,
        backDropValue: false,
        sideBar: false
      }
    }

    return state
}

export default reducer;
