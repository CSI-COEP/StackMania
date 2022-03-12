import { initializeApp } from "firebase-admin/app";
import { credential } from "firebase-admin";

const firebase = initializeApp({
  credential: credential.cert(require("./firebase.json")),
});

export { firebase };
