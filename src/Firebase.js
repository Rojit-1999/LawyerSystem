// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// first pali ko firebase ho 
// const firebaseConfig = {
//   apiKey: "AIzaSyDDwh6QLN7YEQjJLjpeyAhywCgz25RlFnc",
//   authDomain: "hamrowakil.firebaseapp.com",
//   databaseURL: "https://hamrowakil-default-rtdb.firebaseio.com",
//   projectId: "hamrowakil",
//   storageBucket: "hamrowakil.appspot.com",
//   messagingSenderId: "657501614085",
//   appId: "1:657501614085:web:b1970880f07feac8906c6c"
// };

// manish ko firebase ho 
const firebaseConfig = {
  apiKey: "AIzaSyDZh1rmym_yvA76pBnjns0_3g4A-wEY4gc",
  authDomain: "hamrowakil-d3a2e.firebaseapp.com",
  databaseURL: "https://hamrowakil-d3a2e-default-rtdb.firebaseio.com",
  projectId: "hamrowakil-d3a2e",
  storageBucket: "hamrowakil-d3a2e.appspot.com",
  messagingSenderId: "447191334220",
  appId: "1:447191334220:web:122af65027cb27a8d063e9"
};

// second pali ko firebase ho 
// const firebaseConfig = {
//   apiKey: "AIzaSyD-ysr3A2M1Erjuu67rOa0yXt2NSJENtnQ",
//   authDomain: "hamrowakil-25836.firebaseapp.com",
//   databaseURL: "https://hamrowakil-25836-default-rtdb.firebaseio.com",
//   projectId: "hamrowakil-25836",
//   storageBucket: "hamrowakil-25836.appspot.com",
//   messagingSenderId: "235916491638",
//   appId: "1:235916491638:web:b6978f10a8ab5320fcd857",
//   measurementId: "G-3B5S9K05M1"
// };


// const firebaseConfig = {
//   apiKey: "AIzaSyBjBecVPC_-hDVG4l-PBgTSSKea1cMNUas",
//   authDomain: "unique-hamrowakil.firebaseapp.com",
//   databaseURL: "https://unique-hamrowakil-default-rtdb.firebaseio.com",
//   projectId: "unique-hamrowakil",
//   storageBucket: "unique-hamrowakil.appspot.com",
//   messagingSenderId: "133099025622",
//   appId: "1:133099025622:web:52bd0895ebc5f2b5e7c577",
//   measurementId: "G-XYQQ49S9E7"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
// export const storage = firebase.storage("gs://react-project1-61977.appspot.com");

export default firebase;



