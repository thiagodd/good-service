// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCOnQSCRZ56Ofqxyf2GVMhVkjSRAeO06OU",
    authDomain: "scripts-db-3dc04.firebaseapp.com",
    databaseURL: "https://scripts-db-3dc04-default-rtdb.firebaseio.com",
    projectId: "scripts-db-3dc04",
    storageBucket: "scripts-db-3dc04.firebasestorage.app",
    messagingSenderId: "289004405082",
    appId: "1:289004405082:web:8bed978297a7cd8bbef363"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };