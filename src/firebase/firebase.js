import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCNAocgtR5RKebPcDkOwN1LKBtSGlPePTo",
    authDomain: "react-authentication-a6f80.firebaseapp.com",
    databaseURL: "https://react-authentication-a6f80.firebaseio.com",
    projectId: "react-authentication-a6f80",
    storageBucket: "react-authentication-a6f80.appspot.com",
    messagingSenderId: "241173020628"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
export { auth };