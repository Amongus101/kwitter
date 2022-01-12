
var firebaseConfig = {
    apiKey: "AIzaSyC6kOVoO4vs4_ohbV4XuN4t5bnNDY4bbQE",
    authDomain: "kwitter-868e7.firebaseapp.com",
    databaseURL: "https://kwitter-868e7-default-rtdb.firebaseio.com",
    projectId: "kwitter-868e7",
    storageBucket: "kwitter-868e7.appspot.com",
    messagingSenderId: "904626223824",
    appId: "1:904626223824:web:79702abd8f4c71f8b8bcd5",
    measurementId: "G-K9WPDWQZ3N"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
    });
}