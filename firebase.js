import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBr8cwXrhoDfo1B3y_V2KYcL-MJD44NLjk",
	authDomain: "clone-myown.firebaseapp.com",
	projectId: "clone-myown",
	storageBucket: "clone-myown.appspot.com",
	messagingSenderId: "968304121171",
	appId: "1:968304121171:web:f804b06a5165438e8d7da6",
};

let firebaseApp = firebase.initializeApp(firebaseConfig);

let db = firebaseApp.firestore;
let auth = firebase.auth();

export {db, auth};
