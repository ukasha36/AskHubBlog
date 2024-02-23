let humburger = document.getElementById("humburger");

let buttonsDiv = document.querySelector(".buttons")
buttonsDiv.classList.add("menuShow")

console.log(buttonsDiv)
humburger.addEventListener("click",()=>{
    buttonsDiv.classList.toggle("menuShow")
})



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {getFirestore, collection, query, onSnapshot,where  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getDatabase , ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2H3kpBXQckjkApLJ13rsvxRhM6wnX7lk",
  authDomain: "ukasha-askhubblogs.firebaseapp.com",
  projectId: "ukasha-askhubblogs",
  storageBucket: "ukasha-askhubblogs.appspot.com",
  messagingSenderId: "533173042440",
  appId: "1:533173042440:web:61ad078cf70af3d80040bd"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);



let currentPage = window.location.pathname.split('/').pop();









const blogHead = document.getElementById("post-section");
console.log(blogHead)

let months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Nov","Dec"]



const loadBlog =()=>{
  const q = query(collection(db, "Blogs"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const Blogs = querySnapshot.docs.map( (docs)=>{
    let blogEl = docs.data()
    
    let date= new Date(blogEl.date);
   
    let day = date.getDate();
   
    let month = months[date.getMonth()];
  
    let years = date.getFullYear();
    
    const formattedTime = `${day}-${month}-${years}`;
   
    console.log(blogEl)
    let userEmail = auth.currentUser.email;
   let displayName = userEmail.split('@')[0];
  
   console.log(displayName);

    return  `
    <div class="post">
                <div class="right">
                    <h1><a href="./post.html">${blogEl.title}</a></h1>
                    <p><a href="./post.html">${blogEl.description}</a></p>
                        <div class="detail">
                        
                            <p> Published By : ${  displayName                     }</p>
                            <p> Date : ${formattedTime}</p>
                        </div>
                </div> 
                <div class="left"  style= "background-image: url(${blogEl.imageUrl}) "><a href=${blogEl.imageUrl}></a></div>
           
                <div class="replybox">
                <h2> Leave a Comment </h2>
                <textarea
                  name="description"
                  id="description"
                  cols="50"
                  rows="10"
                ></textarea>
                
                <button id="submit" value="Submit" > Submit</button>
              </div>
           
           
                </div>
            
        
           
            </div>
            `

            

    
  } ).join(",");

 
  blogHead.innerHTML = Blogs;
  
  });
}
loadBlog()

 

// Get references to elements
const descriptionInput = document.getElementById("description");
const submitButton = document.getElementById("submit");

// Function to write data to Firebase
async function writeReply() {
  // Validate user authentication (if applicable)
  if (!firebase.auth().currentUser) {
    console.error("User is not signed in. Please sign in first.");
    return;
  }

  // Get user email and display name
  const userEmail = firebase.auth().currentUser.email;
  const displayName = userEmail.split('@')[0];

  // Get description value
  const description = descriptionInput.value.trim();

  // Check for empty data
  if (!description) {
    console.error("Description cannot be empty.");
    return;
  }

  // Generate a unique ID (adjust if you need a specific format)
  const id = firebase.database().ref().push().key;

  // Construct payload object
  const payload = {
    id,
    displayName,
    description,
    date: firebase.database.ServerValue.TIMESTAMP, // Use ServerValue.TIMESTAMP
  };

  // Write data to Firebase Realtime Database
  try {
    const userRef = firebase.database().ref('reply/' + id);
    await userRef.set(payload);
    console.log("Data written successfully to Firebase.");
    // Clear the input field after successful write
    descriptionInput.value = "";
  } catch (error) {
    console.error("Error writing data to Firebase:", error);
    // Handle errors appropriately, e.g., display user-friendly messages
  }
}

// Add event listener to button
 if (submitButton) {
  submitButton.addEventListener("click", writeReply);
} else {
  console.error("Submit button element not found with ID 'submit'.");
}


 















const checkLogin2 =()=>{

  onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const uid = user.uid;
      loadBlog(user)
   
    //  user = auth.currentUser;
    console.log(auth.currentUser)
      // ...
    } else {
      // User is signed out
      // ...
    
    }

    
  });
}

checkLogin2()
