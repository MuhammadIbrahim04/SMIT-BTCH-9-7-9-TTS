import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { 
    getAuth,
    createUserWithEmailAndPassword,
 } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5gwYB3t4WdP8QSNET5-UhOBshItKMAB4",
  authDomain: "fir-02-08-23.firebaseapp.com",
  projectId: "fir-02-08-23",
  storageBucket: "fir-02-08-23.appspot.com",
  messagingSenderId: "481846330704",
  appId: "1:481846330704:web:424aadb6d078377ae59855",
  measurementId: "G-1XMECZC6BF"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });