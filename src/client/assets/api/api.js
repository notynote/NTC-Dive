import firebase from 'firebase';
import Rebase from 're-base'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCGOsjdoYWRCZWPaCFUfR2RBgIaIXTbMOQ",
    authDomain: "ntc-dive-1234.firebaseapp.com",
    databaseURL: "https://ntc-dive-1234.firebaseio.com",
    projectId: "ntc-dive-1234",
    storageBucket: "ntc-dive-1234.appspot.com",
    messagingSenderId: "610394955492"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base;


// Images Carousel
export const KohChangimages = [
    {
      original: require('../images/DSC_1096.JPG') ,
      thumbnail:  require('../images/DSC_1096.JPG') 
    },
    {
      original:  require('../images/DSC_8995-1.jpg') ,
      thumbnail: require('../images/DSC_8995-1.jpg')
    },
    {
      original: require('../images/IMG_1177.jpg'),
      thumbnail: require('../images/IMG_1177.jpg')
    },
    {
      original: require('../images/POP_8101.JPG'),
      thumbnail: require('../images/POP_8101.JPG')
    },
    {
      original: require('../images/POP_8166.JPG'),
      thumbnail: require('../images/POP_8166.JPG')
    },
    {
      original: require('../images/POP_8175.JPG'),
      thumbnail: require('../images/POP_8175.JPG')
    },
    {
      original: require('../images/GOPR0165.JPG'),
      thumbnail: require('../images/GOPR0165.JPG'),
    },
    {
      original: require('../images/DSC_9120.JPG'),
      thumbnail:  require('../images/DSC_9120.JPG'),
    },
    {
      original: require('../images/DSC_9224.JPG'),
      thumbnail:  require('../images/DSC_9224.JPG'),
    }
  ]



export const RatesChangimages = [
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
]

export const DayTripsSlide = [
      {
        original: require('../images/POP_8268.JPG'),
        thumbnail: require('../images/POP_8268.JPG'),
      },
      {
        original: require('../images/POP_8285.JPG'),
        thumbnail: require('../images/POP_8285.JPG')
      },
      {
        original:  require('../images/POP_8305.JPG'),
        thumbnail: require('../images/POP_8305.JPG'),
      },
      {
        original:  require('../images/POP_8324.JPG'),
        thumbnail: require('../images/POP_8324.JPG'),
      },
    {
      original: require('../images/POP_8362.JPG'),
      thumbnail: require('../images/POP_8362.JPG'),
    }
]

export const BoatTrip1 = [
    {
      original: require('../images/1.jpg'),
      thumbnail: require('../images/1.jpg')
    },
    {
      original: require('../images/2.jpg'),
      thumbnail: require('../images/2.jpg')
    },
    {
      original: require('../images/3.jpg'),
      thumbnail: require('../images/3.jpg')
    },
    {
      original: require('../images/4.jpg'),
      thumbnail: require('../images/4.jpg')
    },
    {
      original: require('../images/5.jpg'),
      thumbnail: require('../images/5.jpg')
    },
    {
      original: require('../images/6.jpg'),
      thumbnail: require('../images/6.jpg')
    },
    {
      original: require('../images/7.jpg'),
      thumbnail: require('../images/7.jpg')
    },
    {
      original: require('../images/8.jpg'),
      thumbnail: require('../images/8.jpg')
    },
]



export const BoatTrip2 = [
      {
        original: require('../images/boat2/1.JPG'),
        thumbnail:  require('../images/boat2/1.JPG'),
      },
      {
        original: require('../images/boat2/2.jpg'),
        thumbnail:  require('../images/boat2/2.jpg'),
      },
      {
        original: require('../images/boat2/3.jpg'),
        thumbnail:  require('../images/boat2/3.jpg'),
      },
      {
        original: require('../images/boat2/4.jpg'),
        thumbnail:  require('../images/boat2/4.jpg'),
      },
      {
        original: require('../images/boat2/5.jpg'),
        thumbnail:  require('../images/boat2/5.jpg'),
      },
      {
        original: require('../images/boat2/6.jpg'),
        thumbnail:  require('../images/boat2/6.jpg'),
      },
      {
        original: require('../images/boat2/7.jpg'),
        thumbnail:  require('../images/boat2/7.jpg'),
      },
      {
        original: require('../images/boat2/8.jpg'),
        thumbnail:  require('../images/boat2/8.jpg'),
      },
      {
        original: require('../images/boat2/9.jpg'),
        thumbnail:  require('../images/boat2/9.jpg'),
      },
      {
        original: require('../images/boat2/10.jpg'),
        thumbnail:  require('../images/boat2/10.jpg'),
      },
]


export const BluberryHill = [
  {
    original: require('../images/blueberryhill/DSC_9048.JPG') ,
    thumbnail: require('../images/blueberryhill/DSC_9048.JPG')
  },
  {
    original: require('../images/blueberryhill/DSC_9052.JPG') ,
    thumbnail: require('../images/blueberryhill/DSC_9052.JPG') ,
  },
  {
    original: require('../images/blueberryhill/DSC_9072.JPG') ,
    thumbnail: require('../images/blueberryhill/DSC_9072.JPG')
  },
  {
    original: require('../images/blueberryhill/DSC_9074.JPG') ,
    thumbnail: require('../images/blueberryhill/DSC_9074.JPG')
  },
  {
  original: require('../images/blueberryhill/DSC_9089.JPG'),
  thumbnail: require('../images/blueberryhill/DSC_9089.JPG')
  },
  {
  original: require('../images/blueberryhill/DSC_9074.JPG'),
  thumbnail: require('../images/blueberryhill/DSC_9074.JPG')
  },
  {
  original: require('../images/blueberryhill/DSC_9094.JPG'),
  thumbnail: require('../images/blueberryhill/DSC_9094.JPG')
  },
  {
  original: require('../images/blueberryhill/DSC_9212.JPG'),
  thumbnail: require('../images/blueberryhill/DSC_9212.JPG')
  },
  {
  original: require('../images/blueberryhill/DSC_9215.JPG'),
  thumbnail: require('../images/blueberryhill/DSC_9215.JPG')
  },
  {
  original: require('../images/blueberryhill/DSC_9217.JPG'),
  thumbnail: require('../images/blueberryhill/DSC_9217.JPG')
  },
  {
  original: require('../images/blueberryhill/DSC_9221.JPG'),
  thumbnail: require('../images/blueberryhill/DSC_9221.JPG')
  },
  {
  original: require('../images/blueberryhill/DSC_9224.JPG'),
  thumbnail: require('../images/blueberryhill/DSC_9224.JPG')
  },
  {
  original: require('../images/blueberryhill/DSC_9230.JPG'),
  thumbnail: require('../images/blueberryhill/DSC_9230.JPG')
  },
  {
  original: require('../images/blueberryhill/IMG_0995.jpg'),
  thumbnail: require('../images/blueberryhill/IMG_0995.jpg')
  },
]

export const AlhambraRock = [
      {
      original: require('../images/rock/GOPR0461.JPG'),
      thumbnail: require('../images/rock/GOPR0461.JPG'),
      },
      {
      original: require('../images/rock/POP_8266.JPG'),
      thumbnail: require('../images/rock/POP_8266.JPG'),
      },
      {
      original: require('../images/rock/POP_8268.JPG'),
      thumbnail: require('../images/rock/POP_8268.JPG'),
      },
      {
      original: require('../images/rock/POP_8272.JPG'),
      thumbnail: require('../images/rock/POP_8272.JPG'),
      },
      {
      original: require('../images/rock/POP_8275.JPG'),
      thumbnail: require('../images/rock/POP_8275.JPG'),
      },
      {
      original: require('../images/rock/POP_8285.JPG'),
      thumbnail: require('../images/rock/POP_8285.JPG'),
      },
      {
      original: require('../images/rock/POP_8295.JPG'),
      thumbnail: require('../images/rock/POP_8295.JPG'),
      },
      {
      original: require('../images/rock/POP_8307.JPG'),
      thumbnail: require('../images/rock/POP_8307.JPG'),
      },
      {
      original: require('../images/rock/POP_8324.JPG'),
      thumbnail: require('../images/rock/POP_8324.JPG'),
      },
      {
      original: require('../images/rock/POP_8325.JPG'),
      thumbnail: require('../images/rock/POP_8325.JPG'),
      },
      {
      original: require('../images/rock/POP_8333.JPG'),
      thumbnail: require('../images/rock/POP_8333.JPG'),
      },
      {
      original: require('../images/rock/POP_8354.JPG'),
      thumbnail: require('../images/rock/POP_8354.JPG'),
      },
      {
      original: require('../images/rock/POP_8362.JPG'),
      thumbnail: require('../images/rock/POP_8362.JPG'),
      },
      {
      original: require('../images/rock/POP_8372.JPG'),
      thumbnail: require('../images/rock/POP_8372.JPG'),
      },
      {
      original: require('../images/rock/POP_8389.JPG'),
      thumbnail: require('../images/rock/POP_8389.JPG'),
      },
]





export const HTMS = [

      
      {
      original: require('../images/HTMS/DSC_1096.JPG'),
      thumbnail: require('../images/HTMS/DSC_1096.JPG'),
      },
      {
      
      original: require('../images/HTMS/DSC_8995-1.jpg'),
      thumbnail: require('../images/HTMS/DSC_8995-1.jpg'),
      },
      {
      
      original: require('../images/HTMS/DSC_9009.JPG'),
      thumbnail: require('../images/HTMS/DSC_9009.JPG'),
      },
      {
      
      original: require('../images/HTMS/DSC_9033.JPG'),
      thumbnail: require('../images/HTMS/DSC_9033.JPG'),
      },
      {
      
      original: require('../images/HTMS/DSC_9106.JPG'),
      thumbnail: require('../images/HTMS/DSC_9106.JPG'),
      },
      {
      
      original: require('../images/HTMS/DSC_9120.JPG'),
      thumbnail: require('../images/HTMS/DSC_9120.JPG'),
      },
      {
      
      original: require('../images/HTMS/DSC_9201.JPG'),
      thumbnail: require('../images/HTMS/DSC_9201.JPG'),
      },
      {
      
      original: require('../images/HTMS/DSC_9207.JPG'),
      thumbnail: require('../images/HTMS/DSC_9207.JPG'),
      },
      {
      
      original: require('../images/HTMS/DSC_9313.JPG'),
      thumbnail: require('../images/HTMS/DSC_9313.JPG'),
      },
      {
      
      original: require('../images/HTMS/DSC_9328.JPG'),
      thumbnail: require('../images/HTMS/DSC_9328.JPG'),
      },
      {
      
      original: require('../images/HTMS/GOPR0165.JPG'),
      thumbnail: require('../images/HTMS/GOPR0165.JPG'),
      },
      {
      
      original: require('../images/HTMS/IMG_1163.jpg'),
      thumbnail: require('../images/HTMS/IMG_1163.jpg'),
      },
      {
      
      original: require('../images/HTMS/IMG_1177.jpg'),
      thumbnail: require('../images/HTMS/IMG_1177.jpg'),
      },
      {
      
      original: require('../images/HTMS/POP_6864.jpg'),
      thumbnail: require('../images/HTMS/POP_6864.jpg'),
      },
      {
      
      original: require('../images/HTMS/POP_8101.JPG'),
      thumbnail: require('../images/HTMS/POP_8101.JPG'),
      },

]  
export const HUA = [
  {
    original: require('../images/hua.jpg'),
    thumbnail: require('../images/hua.jpg'),
  }
]



export const KohRang = [
  {
  original: require('../images/KohRang/DSC_9151.JPG'),
  thumbnail: require('../images/KohRang/DSC_9151.JPG'),
  },
  {
  original: require('../images/KohRang/POP_8136.JPG'),
  thumbnail: require('../images/KohRang/POP_8136.JPG'),
  },
  {
  original: require('../images/KohRang/POP_8140.JPG'),
  thumbnail: require('../images/KohRang/POP_8140.JPG'),
  },
  {
  original: require('../images/KohRang/POP_8166.JPG'),
  thumbnail: require('../images/KohRang/POP_8166.JPG'),
  },
  {
  original: require('../images/KohRang/POP_8175.JPG'),
  thumbnail: require('../images/KohRang/POP_8175.JPG'),
  },
]



export const KohThalu = [

  
  {
  original: require('../images/KohThalu/IMG_4593.JPG'),
  thumbnail: require('../images/KohThalu/IMG_4593.JPG'),
  },
  {
  original: require('../images/KohThalu/IMG_4597.JPG'),
  thumbnail: require('../images/KohThalu/IMG_4597.JPG'),
  },
  {
  original: require('../images/KohThalu/IMG_4661.JPG'),
  thumbnail: require('../images/KohThalu/IMG_4661.JPG'),
  },
  {
  original: require('../images/KohThalu/IMG_4813.JPG'),
  thumbnail: require('../images/KohThalu/IMG_4813.JPG'),
  },
  {
  original: require('../images/KohThalu/IMG_4823.JPG'),
  thumbnail: require('../images/KohThalu/IMG_4823.JPG'),
  },
  {
  original: require('../images/KohThalu/POP_5036.JPG'),
  thumbnail: require('../images/KohThalu/POP_5036.JPG'),
  },
  {
  original: require('../images/KohThalu/POP_5037.JPG'),
  thumbnail: require('../images/KohThalu/POP_5037.JPG'),
  },
  {
  original: require('../images/KohThalu/POP_6938.jpg'),
  thumbnail: require('../images/KohThalu/POP_6938.jpg'),
  },

]  
