import { credential } from "firebase-admin";
import { initializeApp } from "firebase-admin/app";

const firebase = initializeApp({
  credential: credential.cert(require("./firebase.json")),
});

export { firebase };

