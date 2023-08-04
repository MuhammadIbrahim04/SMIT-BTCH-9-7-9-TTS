import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,

} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {
    getDatabase,
    ref,
    set
}
    from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";


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
const auth = getAuth();
const db = getDatabase();

let register_btn = document.getElementById('register_btn');

register_btn.addEventListener('click', function () {
    let email = document.getElementById('register_email');
    let password = document.getElementById('register_password');
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            set(ref(db,'users/${user.uId}'),{
                email: email.vaule,
                password: password.vaule,

            })
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("error==>", errorMessage);
            // ..
        });


});

let login_btn = document.getElementById('login_btn')

login_btn.addEventListener('click', function () {
    let login_email = document.getElementById('login_email')
    let login_password = document.getElementById('login_password')

    signInWithEmailAndPassword(auth, login_email.value, login_password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("user==>", user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error==>", errorMessage)
        });

});



function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}