// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOi2oyg7o8p0YC4ldvpA4c38eOi8YXMWk",
  authDomain: "m-9-m-51-react-auth-intg.firebaseapp.com",
  projectId: "m-9-m-51-react-auth-intg",
  storageBucket: "m-9-m-51-react-auth-intg.appspot.com",
  messagingSenderId: "956737426632",
  appId: "1:956737426632:web:9eb4e9575e93d398eb81fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth