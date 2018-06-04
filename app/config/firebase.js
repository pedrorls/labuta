import * as firebase from 'firebase';
import service from './firebase_service';

const config = service;

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth, firebase };