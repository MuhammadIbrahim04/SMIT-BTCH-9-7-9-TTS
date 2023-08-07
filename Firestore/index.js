import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,

} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {
    doc,
    setDoc,
    getFirestore,
    getDoc,
}
    from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// import {
//     getDatabase,
//     ref,
//     set,
//     onValue
// }
//     from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyAWqiJEPwRdARUpdxPE4Rm71O8niWzIYUs",
    authDomain: "testfirestore-d8e7f.firebaseapp.com",
    projectId: "testfirestore-d8e7f",
    storageBucket: "testfirestore-d8e7f.appspot.com",
    messagingSenderId: "158872388326",
    appId: "1:158872388326:web:eee9b2361ca8108ece7127",
    measurementId: "G-H6Z0W7F57S"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const db = getDatabase();
const db = getFirestore();

let register_btn = document.getElementById('register_btn');

register_btn.addEventListener('click', function () {
    let email = document.getElementById('register_email');
    let password = document.getElementById('register_password');
    createUserWithEmailAndPassword(auth, email.value, password.value)

        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // Add a new document in collection "cities"
            await setDoc(doc(db, "Users", user.uid), {
                email: email.value,
                password: password.value,

            });


            // set(ref(db, `users/${user.uid}`), {
            //     email: email.value,
            //     password: password.value,

            // });
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
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;

            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
            // onValue(ref(db, `users/${user.uid}`), (data) => {
            //     console.log("==>data", data.val());
            // });
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error==>", errorMessage)
        });

});



