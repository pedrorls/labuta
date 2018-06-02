import firebase from 'firebase';
import firebaseKey from './keys';

const config = {
    apiKey: firebaseKey,
    authDomain: "job-s-deck.firebaseapp.com",
    databaseURL: "https://job-s-deck.firebaseio.com",
    projectId: "job-s-deck",
    storageBucket: "job-s-deck.appspot.com",
    messagingSenderId: "558990028431"
};
firebase.initializeApp(config);
