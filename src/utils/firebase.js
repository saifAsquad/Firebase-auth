// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const appId = process.env.REACT_APP_FIREBASE_APP_ID;

const firebaseConfig = {
	apiKey,
	authDomain,
	projectId: "fir-auth-65fa3",
	storageBucket: "fir-auth-65fa3.appspot.com",
	messagingSenderId: "448144355513",
	appId,
	measurementId: "G-G5C982NG82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
