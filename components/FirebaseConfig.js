import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAYjx7qeJFo8emjZFM_zDgDQZfkMAkJ_Tk",
  authDomain: "my-project-335ff.firebaseapp.com",
  databaseURL: "https://my-project-335ff.firebaseio.com",
  projectId: "my-project-335ff",
  storageBucket: "my-project-335ff.appspot.com",
  messagingSenderId: "624038041896"
};

export const firebaseApp = firebase.initializeApp(config);
