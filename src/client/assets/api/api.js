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




