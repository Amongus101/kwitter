

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
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;

    function addRoom() {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
          })
          localStorage.setItem("room_name", room_name);
          
          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       //Start code
      console.log(" Room Names - " + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name );
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
