// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCdsSaNzM9EObnZ8_R8GyJHpERqhu2KOsI",
    authDomain: "unihouse1292.firebaseapp.com",
    projectId: "unihouse1292",
    storageBucket: "unihouse1292.firebasestorage.app",
    messagingSenderId: "605942699616",
    appId: "1:605942699616:web:4ad15a8546cc2b20779505",
    measurementId: "G-NMGH0CZEZ1"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics };
