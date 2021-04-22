import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from "vue";
import firebase from 'firebase';
import App from "./App.vue";
import router from "./router";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCXwoXIW57FGSCqpp9b1mXViHP57fXNyE4",
  authDomain: "login-foods-go.firebaseapp.com",
  projectId: "login-foods-go",
  storageBucket: "login-foods-go.appspot.com",
  messagingSenderId: "515990216040",
  appId: "1:515990216040:web:f97d8e0385ba02479c8add",
  measurementId: "G-0EQYY2FQ06"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
