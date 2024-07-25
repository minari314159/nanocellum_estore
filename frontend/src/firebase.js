// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAVreRnLkNqXyNXMQO4OE8XZHumSNu_duU",
	authDomain: "nanocellum-ce572.firebaseapp.com",
	projectId: "nanocellum-ce572",
	storageBucket: "nanocellum-ce572.appspot.com",
	messagingSenderId: "817655391964",
	appId: "1:817655391964:web:4f0514421a42f25fa5f619",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app