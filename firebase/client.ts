import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDdcXyrex2jtRlOoBbFztdOIAkxMR4zGJs",
	authDomain: "twitter-clone-1bd9c.firebaseapp.com",
	databaseURL: "https://twitter-clone-1bd9c.firebaseio.com",
	projectId: "twitter-clone-1bd9c",
	storageBucket: "twitter-clone-1bd9c.appspot.com",
	messagingSenderId: "582125196316",
	appId: "1:582125196316:web:6498a5931cef9f9e303bd9",
	measurementId: "G-6F87RFR0XC"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const loginWithGoogle = () => {
	const authProvider = new firebase.auth.GoogleAuthProvider();
	return firebase.auth().signInWithPopup(authProvider);
};

export const getCurrentUser = (setUser) => {
	return firebase.auth().onAuthStateChanged(setUser)
}