
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDU34gE3wu-6FpZFfyxilFlbfomoQbDv9I",
      authDomain: "kwitter-cd67a.firebaseapp.com",
      databaseURL: "https://kwitter-cd67a-default-rtdb.firebaseio.com",
      projectId: "kwitter-cd67a",
      storageBucket: "kwitter-cd67a.appspot.com",
      messagingSenderId: "421502822503",
      appId: "1:421502822503:web:13541e8a62308d92364cc2",
      measurementId: "G-RE6W764TYZ"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome Students and Teachers " + user_name + "!";

    function addRoom()
    {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update
({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id  = " +Room_names + " onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}