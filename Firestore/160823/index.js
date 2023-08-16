import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {
    getDatabase,
    ref,
    set,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyBSvM5w8U-zyUGhaQScW8psV5-AAXDIR2Y",
    authDomain: "chatapp-updated-9c7b7.firebaseapp.com",
    databaseURL: "https://chatapp-updated-9c7b7-default-rtdb.firebaseio.com",
    projectId: "chatapp-updated-9c7b7",
    storageBucket: "chatapp-updated-9c7b7.appspot.com",
    messagingSenderId: "262112817437",
    appId: "1:262112817437:web:3ce456da0c77ff25ea71f4",
    measurementId: "G-H328LJL8JR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();

const register_btn = document.getElementById('register_btn')
register_btn.addEventListener('click', () => {
    let register_email = document.getElementById('register_email')
    let register_password = document.getElementById('register_password')

    createUserWithEmailAndPassword(auth, register_email.value, register_password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
            set(ref(db, `users/${user.uid}`), {
                email: register_email.value,
                password: register_password.value,
                
              });
            
            
            // console.log("==>user", user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("==>errorMessage", errorMessage)

        });
})

const login_btn = document.getElementById('login_btn')
login_btn.addEventListener('click', () => {
    let login_email = document.getElementById('login_email')
    let login_password = document.getElementById('login_password')

    signInWithEmailAndPassword(auth, login_email.value, login_password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("==>user", user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("==>errorMessage", errorMessage)
        });


})

const logout_btn = document.getElementById('logout_btn')
logout_btn.addEventListener('click', () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            alert("user is logout")
        } else {

        }
    });
})








