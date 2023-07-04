import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDg9Cx3rr5tJzXe9VItqcjAp0bq9jQ-c4Y",
  authDomain: "quadrats-6bd65.firebaseapp.com",
  projectId: "quadrats-6bd65",
  storageBucket: "quadrats-6bd65.appspot.com",
  messagingSenderId: "336760567756",
  appId: "1:336760567756:web:f662ac4017316702700f69",
  measurementId: "G-HH60017VGY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };
