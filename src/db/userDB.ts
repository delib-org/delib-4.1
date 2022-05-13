import {app} from "./firebase";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";


const auth = getAuth(app);

export function anonymousLogin(): void {
  try {
    signInAnonymously(auth)
      .then(() => {
        console.info("User signed in anonymusly");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
      });
  } catch (error) {
    console.error(error);
  }
}

export function listenToUserLogin() {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.info(`User ${uid} signed-in`);
        // ...
      } else {
        console.info("User is signed out");
        // ...
      }
    });
  } catch (error) {
    console.error(error);
  }
}
