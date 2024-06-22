
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAUWH4z1uEm0f70gZNaFaDx0nQQyrxqHN0",
      authDomain: "lets-chat-8c493.firebaseapp.com",
      projectId: "lets-chat-8c493",
      storageBucket: "lets-chat-8c493.appspot.com",
      messagingSenderId: "551107621108",
      appId: "1:551107621108:web:7a3e9d8d2c1ff54381eea1",
      measurementId: "G-9DRHJ8081K"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!"

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name" 
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}


function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name" + Room_names);
row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code

      });});}
getData();""
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location = "index.html"
}