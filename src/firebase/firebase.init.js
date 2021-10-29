import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseinitialize = () => {
  return initializeApp(firebaseConfig);
};

export default firebaseinitialize;
