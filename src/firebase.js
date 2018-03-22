import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA0iVKD-evk6Bv-Rb0Z2FreSAlYlezA5Fs",
    authDomain: "react-firebase-todo-list.firebaseapp.com",
    databaseURL: "https://react-firebase-todo-list.firebaseio.com",
    projectId: "react-firebase-todo-list",
    storageBucket: "react-firebase-todo-list.appspot.com",
    messagingSenderId: "1044538944556"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
