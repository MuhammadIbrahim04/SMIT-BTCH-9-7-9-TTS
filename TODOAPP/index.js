import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
}
    from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import {
    doc,
    setDoc,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyA2xlOC1D9tdmbresWVG-Z-CzVIHdq-TRk",
    authDomain: "my1stprojectfb.firebaseapp.com",
    projectId: "my1stprojectfb",
    storageBucket: "my1stprojectfb.appspot.com",
    messagingSenderId: "652924271141",
    appId: "1:652924271141:web:6262b5bf3af95623fc1dcc",
    measurementId: "G-8NWDYD5R94"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const loader = document.getElementById('loader')
const content_container = document.getElementById('content_container')
const login_container = document.getElementById('login_container')
const registerBtn = document.getElementById('register_btn')
const loginBtn = document.getElementById('login_btn')
const logoutBtn = document.getElementById('logout')
const submitTodo = document.getElementById('submit_todo')
const todo_container = document.getElementById('todo_container')



onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log('user.uid->', user.uid)
        loader.style.display = 'none'
        content_container.style.display = 'block'
        login_container.style.display = 'none'
        getTodos()
        // ...
    } else {
        // User is signed out
        console.log('user mojood nahn he')
        loader.style.display = 'none'
        login_container.style.display = 'block'
        content_container.style.display = 'none'
        // ...
    }
});

registerBtn.addEventListener('click', register)
loginBtn.addEventListener('click', login)
logoutBtn.addEventListener('click', logout)
submitTodo.addEventListener('click', submitTodoFunc)

function register() {
    const name = document.getElementById('fname').value
    const fatherName = document.getElementById('lname').value
    const reg_email = document.getElementById('email').value
    const reg_password = document.getElementById('password').value
    createUserWithEmailAndPassword(auth, reg_email, reg_password)
        .then(userCredential => {
            const user = userCredential.user
            const obj = {
                fname,
                lname,
                email: reg_email
            }
            console.log('user--->', user)
            const userRef = ref(db, `users/${user.uid}`)
            console.log('userRef--->', userRef)
            set(userRef, obj)
        })
        .catch(error => {
            const errorCode = error.code
            const errorMessage = error.message
            alert(errorMessage)
        })
}
function login() {
    const reg_email = document.getElementById('email_log')
    const reg_password = document.getElementById('password_log')
    signInWithEmailAndPassword(auth, reg_email.value, reg_password.value)
        .then(userCredential => {
            const user = userCredential.user
            console.log('user--->', user)
        })
        .catch(error => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log('errorMessage--->', errorMessage)
        })
}
function logout () {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      })
  }
  function submitTodoFunc () {
    const todo = document.getElementById('todo_input').value
    if (!todo) return alert('Please add some todo')
    const todoListRef = ref(db, `todos/${auth.currentUser.uid}`)
    const newTodoRef = push(todoListRef)
    const obj = {
      todo,
      status: 'pending'
    }
    set(newTodoRef, obj)
    document.getElementById('todo_input').value = ''
  }
  
  function getTodos () {
    const todoListRef = ref(db, `todos/${auth.currentUser.uid}`)
    onValue(todoListRef, snapshot => {
      const isDataExist = snapshot.exists()
      if (isDataExist) {
        todo_container.innerHTML = null
        snapshot.forEach(childSnapshot => {
          const childKey = childSnapshot.key
          const childData = childSnapshot.val()
          console.log('childKey=>', childKey)
          console.log('childData=>', childData)
          const listItem = `<li id = ${childKey}> ${
            childData.todo
          } <button id =${childKey +
            '-edit'}>Edit</button> <button id =${childKey +
            '-del'}>Delete</button> </li>`
          todo_container.innerHTML += listItem
          setTimeout(() => {
            const editbtn = document.getElementById(childKey + '-edit')
            editbtn.addEventListener('click', editFunc)
            const deleteBtn = document.getElementById(childKey + '-del')
            deleteBtn.addEventListener('click', deleteFunc)
          }, 1000)
        })
      }
    })
  }
  
  function editFunc () {
    const elementId = this.id.slice(0, this.id.length - 5)
    const todoRef = ref(db, `todos/${auth.currentUser.uid}/${elementId}`)
    let newTodo = prompt('Edit your todo', this.parentNode.firstChild)
    update(todoRef, { status: newTodo })
  }
  
  function deleteFunc () {
    const elementId = this.id.slice(0, this.id.length - 4)
    console.log(this.id.slice(0, this.id.length - 4))
    const todoRef = ref(db, `todos/${auth.currentUser.uid}/${elementId}`)
    remove(todoRef)
  }