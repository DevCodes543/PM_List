/**
 



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFaQVffyoOzR4eOrFSd-bbPuLLKAfv50Q",
  authDomain: "new-signin-66b98.firebaseapp.com",
  projectId: "new-signin-66b98",
  storageBucket: "new-signin-66b98.appspot.com",
  messagingSenderId: "863894984519",
  appId: "1:863894984519:web:a523a7658583f0e63cde62",
  measurementId: "G-X7XGCZYXY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get HTML elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login');
const signupButton = document.getElementById('signup');
const logoutButton = document.getElementById('logout');
const userInfo = document.getElementById('user-info');
const loginForm = document.getElementById('login-form');
const userEmail = document.getElementById('user-email');

// Sign Up
signupButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const em=userCredential.email;

      console.log('User signed up:', user,email);
    })
    .catch((error) => {
      console.error('Error signing up:', error.message);
    });
});

// Login
loginButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('User logged in:', user);
    })
    .catch((error) => {
      console.error('Error logging in:', error.message);
    });
});

// Logout
logoutButton.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log('User logged out');
  }).catch((error) => {
    console.error('Error logging out:', error.message);
  });
});

// Monitor authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    userInfo.style.display = 'block';
    loginForm.style.display = 'none';
    userEmail.textContent = `Logged in as: ${user.email}`;
  } else {
    // User is signed out
    userInfo.style.display = 'none';
    loginForm.style.display = 'block';
  }
});


 */


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFaQVffyoOzR4eOrFSd-bbPuLLKAfv50Q",
  authDomain: "new-signin-66b98.firebaseapp.com",
  projectId: "new-signin-66b98",
  storageBucket: "new-signin-66b98.appspot.com",
  messagingSenderId: "863894984519",
  appId: "1:863894984519:web:a523a7658583f0e63cde62",
  measurementId: "G-X7XGCZYXY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Sign-In
const provider = new GoogleAuthProvider();

// Get HTML elements
const googleSignInButton = document.getElementById('google-signin');
const logoutButton = document.getElementById('logout');
const userInfo = document.getElementById('user-info');
const loginForm = document.getElementById('login-form');
const userEmail = document.getElementById('user-email');
const userName = document.getElementById('user-name');
const userProfilePic = document.getElementById('user-profile-pic');

// Google Sign-In Button
googleSignInButton.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('User signed in with Google:', user);
      displayUserInfo(user);
    })
    .catch((error) => {
      console.error('Error during Google sign-in:', error.message);
    });
});

// Logout
logoutButton.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log('User logged out');
    clearUserInfo();
  }).catch((error) => {
    console.error('Error logging out:', error.message);
  });
});

// Monitor authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    displayUserInfo(user);
    userInfo.style.display = 'block';
    loginForm.style.display = 'none';
  } else {
    // User is signed out
    clearUserInfo();
    userInfo.style.display = 'none';
    loginForm.style.display = 'block';
  }
});

// Function to display user info
function displayUserInfo(user) {
  userEmail.textContent = `Email: ${user.email}`;
  userName.textContent = `Name: ${user.displayName}`;
  userProfilePic.src = user.photoURL;
}

// Function to clear user info after logout
function clearUserInfo() {
  userEmail.textContent = '';
  userName.textContent = '';
  userProfilePic.src = '';
}
