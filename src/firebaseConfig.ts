import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDQBzQOFUfHXhIRY-2sDqu-jULwKjGTDUY",
    authDomain: "netflix-cl-42482.firebaseapp.com",
    projectId: "netflix-cl-42482",
    storageBucket: "netflix-cl-42482.appspot.com",
    messagingSenderId: "1049519409749",
    appId: "1:1049519409749:web:9a6e923be81ed315eda2dc"
});

export const auth = app.auth();
export default app;