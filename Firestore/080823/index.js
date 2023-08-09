import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyA2xlOC1D9tdmbresWVG-Z-CzVIHdq-TRk",
    authDomain: "my1stprojectfb.firebaseapp.com",
    projectId: "my1stprojectfb",
    storageBucket: "my1stprojectfb.appspot.com",
    messagingSenderId: "652924271141",
    appId: "1:652924271141:web:bf9d6619045170b9fc1dcc",
    measurementId: "G-YW1XMSYYQP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

let register_btn = document.getElementById('register_btn')
register_btn.addEventListener('click', function () {
    let register_email = document.getElementById('register_email');
    let register_password = document.getElementById('register_password');
    createUserWithEmailAndPassword(auth, register_email.value, register_password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
    // ...
  });
})
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
