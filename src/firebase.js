import firebase from "firebase";
import * as admin from 'firebase-admin';

const firebaseConfig = {
  apiKey: "AIzaSyDq13tVXS4nwUWoJU_6gwQUSXFUu-EfIwk",
  authDomain: "all-in-one-d4b64.firebaseapp.com",
  projectId: "all-in-one-d4b64",
  storageBucket: "all-in-one-d4b64.appspot.com",
  messagingSenderId: "469722247603",
  appId: "1:469722247603:web:6ad53415643a893e55dbc6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()
  

  export {provider,auth};
  export default db; 



// The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>

//  TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->


//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDq13tVXS4nwUWoJU_6gwQUSXFUu-EfIwk",
//     authDomain: "all-in-one-d4b64.firebaseapp.com",
//     projectId: "all-in-one-d4b64",
//     storageBucket: "all-in-one-d4b64.appspot.com",
//     messagingSenderId: "469722247603",
//     appId: "1:469722247603:web:6ad53415643a893e55dbc6"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
