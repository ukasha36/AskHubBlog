// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
//   import {  getAuth,updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyC2H3kpBXQckjkApLJ13rsvxRhM6wnX7lk",
    authDomain: "ukasha-askhubblogs.firebaseapp.com",
    projectId: "ukasha-askhubblogs",
    storageBucket: "ukasha-askhubblogs.appspot.com",
    messagingSenderId: "533173042440",
    appId: "1:533173042440:web:61ad078cf70af3d80040bd"
  }; 



//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);

// // <<--------CLOSE------->>





// let updatePro =(e)=>{
// e.preventDefault()
//     let firstName = document.getElementById("fname").value;
//     let lastName = document.getElementById("lname").value;
//     let photo = document.getElementById("photo").file;
//     console.log(photo)
    
//     let fullNmae = firstName + " " + lastName;




//     updateProfile(auth.currentUser, {
//         displayName: `${fullNmae}`, photoURL: "https://example.com/jane-q-user/profile.jpg"
//       }).then(() => {
//         // Profile updated!
//         // ...
//       }).catch((error) => {
//         // An error occurred
//         // ...
//       });
//    }

  

//    let updateBtn = document.getElementById("update")
//    updateBtn && updateBtn.addEventListener("click",updatePro)