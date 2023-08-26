// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from 'firebase/app';
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: 'AIzaSyDnDXc0qjlfUjUp_kOlHTdo1UvUfBr4lHU',
// //   authDomain: 'codewitheras-auth.firebaseapp.com',
// //   projectId: 'codewitheras-auth',
// //   storageBucket: 'codewitheras-auth.appspot.com',
// //   messagingSenderId: '557394395880',
// //   appId: '1:557394395880:web:bb55cf6d93f9dc5d5f7f5d',
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBLsaUg0PCp05OhxmNgnZ8YXHdRVYX9zcM",
//   authDomain: "brainbox-bed6f.firebaseapp.com",
//   databaseURL: "https://brainbox-bed6f-default-rtdb.firebaseio.com",
//   projectId: "brainbox-bed6f",
//   storageBucket: "brainbox-bed6f.appspot.com",
//   messagingSenderId: "335586535249",
//   appId: "1:335586535249:web:bc08539a2071a7acd55570"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqUrdRWkll8sxrz1BZSJ4t1dF6IEr4nP0",
  authDomain: "brainbox1-74b2c.firebaseapp.com",
  projectId: "brainbox1-74b2c",
  storageBucket: "brainbox1-74b2c.appspot.com",
  messagingSenderId: "6370642375",
  appId: "1:6370642375:web:aff14f5fd303cfca37f1e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)