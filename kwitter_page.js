//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBLyXdOVw3rDNpqc5hC3dCSiembLn2optI",
      authDomain: "class-test-b4991.firebaseapp.com",
      databaseURL: "https://class-test-b4991-default-rtdb.firebaseio.com",
      projectId: "class-test-b4991",
      storageBucket: "class-test-b4991.appspot.com",
      messagingSenderId: "71358972882",
      appId: "1:71358972882:web:94949cc6e3c7770ee83e0b",
      measurementId: "G-VESEK85LWB"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send(){
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
 });

 document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
