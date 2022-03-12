import { credential } from "firebase-admin";
import { initializeApp } from "firebase-admin/app";

initializeApp({
  credential: credential.cert(require("../../../firebase.json")),
});
