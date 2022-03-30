// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqYTgYlSJU_5Zy3b91Sg3FG0BWC9CE9Ps",
    authDomain: "practise-kwitter-151df.firebaseapp.com",
    databaseURL: "https://practise-kwitter-151df-default-rtdb.firebaseio.com",
    projectId: "practise-kwitter-151df",
    storageBucket: "practise-kwitter-151df.appspot.com",
    messagingSenderId: "737579245631",
    appId: "1:737579245631:web:9e1c0cee650c489b55d88a"
  };
  
  // Initialize Fireba
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
   }