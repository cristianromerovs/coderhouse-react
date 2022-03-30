import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2Q2bk3uutfN2HvFy8Y20yri6TTohMMCo",
  authDomain: "fir-react-6bf31.firebaseapp.com",
  projectId: "fir-react-6bf31",
  storageBucket: "fir-react-6bf31.appspot.com",
  messagingSenderId: "57244868547",
  appId: "1:57244868547:web:7a62fa464a6670bacea776"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app;
}