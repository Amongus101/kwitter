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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value= "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
