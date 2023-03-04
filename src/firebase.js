import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
      apiKey: "AIzaSyB-h1LUd28gGtWcGlQ05AZdDw9_wKJSMPU",
              authDomain: "instagram-clone-react-abc9d.firebaseapp.com",
              projectId: "instagram-clone-react-abc9d",
              storageBucket: "instagram-clone-react-abc9d.appspot.com",
              messagingSenderId: "324848289569",
              appId: "1:324848289569:web:65a774d9cb9d6c5f412060",
              measurementId: "G-F4W2V0J058"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { auth, db, storage };