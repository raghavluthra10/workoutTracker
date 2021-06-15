import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCIggP7xI_iicKuHiPVIg_B1gmqyyWeekc",
    authDomain: "workout-app-958e9.firebaseapp.com",
    projectId: "workout-app-958e9",
    storageBucket: "workout-app-958e9.appspot.com",
    messagingSenderId: "721704190948",
    appId: "1:721704190948:web:50b4e1bba6514380817df1"
  });

const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default db;