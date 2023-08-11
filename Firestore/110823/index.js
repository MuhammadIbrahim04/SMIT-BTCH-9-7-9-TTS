import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
}
    from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {
    getDatabase,
    ref,
    set,
    onValue,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import {
    doc,
     setDoc,
     getFirestore,

     }
      from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBSvM5w8U-zyUGhaQScW8psV5-AAXDIR2Y",
    authDomain: "chatapp-updated-9c7b7.firebaseapp.com",
    databaseURL: "https://chatapp-updated-9c7b7-default-rtdb.firebaseio.com",
    projectId: "chatapp-updated-9c7b7",
    storageBucket: "chatapp-updated-9c7b7.appspot.com",
    messagingSenderId: "262112817437",
    appId: "1:262112817437:web:2b04cd53deffe510ea71f4",
    measurementId: "G-PJJZF2ET9F"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const db = getDatabase();
const db = getFirestore();

let register_btn = document.getElementById('register_btn')
register_btn.addEventListener('click', function () {
    const register_email = document.getElementById('register_email');
    const register_password = document.getElementById('register_password');
    createUserWithEmailAndPassword(auth, register_email.value, register_password.value)
        .then(async(userCredential) => {
            // Signed in 
            const user = userCredential.user;
            await setDoc(doc(db, "Users", user.uid), {
                email: register_email.value,
                password: register_password.value,
                
              });
              


            // set(ref(db, `users/${user.uid}`),{
            //     register_email:register_email.value,
            //     register_password:register_password.value,

            //     })
            // console.log('==>User', user);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log('==>errorMessage', errorMessage);
        });
});
let login_btn = document.getElementById('login_btn')
login_btn.addEventListener('click', function () {
    const login_email = document.getElementById('login_email')
    const login_password = document.getElementById('login_password')
    signInWithEmailAndPassword(auth, login_email.value, login_password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            onValue(ref(db,`users/${user.uid}`),(data) => {
                console.log('==>loginuser', data.val());    
                
              });
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('==>errorMessage', errorMessage);
        });
});













// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,

// } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// import {
//   getDatabase,
//   ref,
//   set,
//   onValue,

// } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyBSvM5w8U-zyUGhaQScW8psV5-AAXDIR2Y",
//   authDomain: "chatapp-updated-9c7b7.firebaseapp.com",
//   databaseURL: "https://chatapp-updated-9c7b7-default-rtdb.firebaseio.com",
//   projectId: "chatapp-updated-9c7b7",
//   storageBucket: "chatapp-updated-9c7b7.appspot.com",
//   messagingSenderId: "262112817437",
//   appId: "1:262112817437:web:63d5691679274fb7ea71f4",
//   measurementId: "G-S8B0FKS5CP"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth();
// const db = getDatabase();

// let register_btn = document.getElementById('register_btn');
// register_btn.addEventListener('click', function () {
//   const register_email = document.getElementById('register_email');
//   const register_password = document.getElementById('register_password');

//   createUserWithEmailAndPassword(auth, register_email.value, register_password.value)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       set(ref(db, `users/${user.uid}`), {
//         register_email: register_email.value,
//         register_password: register_password.value,

//       });
//     })

//     // ...
//     // console.log('==>SigninUser', user)

//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//       console.log('==>errorMessage', errorMessage);
//     });

//   let login_btn = document.getElementById('login_btn');

//   login_btn.addEventListener('click', function () {
//     const login_email = document.getElementById('login_email');
//     const login_password = document.getElementById('login_password');
//     signInWithEmailAndPassword(auth, login_email.value, login_password.value)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         onValue(ref(db, `users/${user.uid}`), (data) => {

//           console.log("==>data", data.val())
//         });

//         // ...

//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log("errorMessage==>", errorMessage)
//       });

//   })


// }
// )