import * as firebase from 'firebase/app'; 
import * as storage from 'firebase/storage';
import * as firestore from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBy2Ki38pH0qEun8yrBYuYujDVvgW2N3ko",
    authDomain: "image-gallery-5b52a.firebaseapp.com",
    projectId: "image-gallery-5b52a",
    storageBucket: "image-gallery-5b52a.appspot.com",
    messagingSenderId: "178404678808",
    appId: "1:178404678808:web:3b2c708b4abc94bb5944ed",
    measurementId: "G-9JDDGV11FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const projectStorage=storage()
const projectFirestore = firestore();

export {projectStorage,projectFirestore}