var firebaseConfig = {
    apiKey: "AIzaSyAiuaI0Iz4cneW3N7VYRy9rey583xtsVnM",
    authDomain: "kwitter-2afdb.firebaseapp.com",
    databaseURL: "https://kwitter-2afdb-default-rtdb.firebaseio.com",
    projectId: "kwitter-2afdb",
    storageBucket: "kwitter-2afdb.appspot.com",
    messagingSenderId: "66743022580",
    appId: "1:66743022580:web:bc5f90dd807e4e7bf57fa1"
  };
  
  
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
  work:"studying"  
})
}

function addRoom() {
    room_name= document.getElementById("room-name").value;
    localStorage.setItem("room_name")
    window.location="kwitter_room.html"
}