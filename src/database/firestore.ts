import * as admin from "firebase-admin";
import * as serviceAccount from "./shorten-url-key.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
export default firestore;