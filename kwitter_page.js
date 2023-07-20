//YOUR FIREBASE LINKS
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMRAgLkNBeZ1W27IvQobgfB1nkSBDFcNo",
  authDomain: "kwitter-copy-3fd8a.firebaseapp.com",
  databaseURL: "https://kwitter-copy-3fd8a-default-rtdb.firebaseio.com",
  projectId: "kwitter-copy-3fd8a",
  storageBucket: "kwitter-copy-3fd8a.appspot.com",
  messagingSenderId: "945333599240",
  appId: "1:945333599240:web:01682959c404c52f4e25bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem(user_name);
var room_name = localStorage.getItem(room_name);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html"
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
document.getElementById("msg").value = "";
}