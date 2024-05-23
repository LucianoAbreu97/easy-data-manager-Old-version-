import firebase from 'firebase';
import firebaseConfig from './dbFirebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
