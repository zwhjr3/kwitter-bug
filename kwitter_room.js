
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
     
user_name = localStorage.getItem(user_name);
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "add room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html"
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html"
}
