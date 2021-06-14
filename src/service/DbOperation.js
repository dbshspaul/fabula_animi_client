import firebase from "firebase/app";
import "firebase/firestore";
import store from "./VuexConfig.js";

let db = firebase.firestore();

export default class DbOperation {

    saveMessage(uid, msg) {
        return db.collection("fabula_animi").add({
            uid: uid,
            message: msg,
            ct: new Date()

        });
    }

    getMessage() {
        return db.collection("fabula_animi")
            .where("uid", "==", store.state.uid)
            .orderBy('ct', 'desc').get()
            // .then((querySnapshot) => {
            //     querySnapshot.forEach((doc) => {
            //         console.log(`${doc.id} => ${doc.data()}`);
            //     });
            //     return Promise.resolve(querySnapshot);
            // }).catch(reason => Promise.reject(reason))
            ;
    }
}