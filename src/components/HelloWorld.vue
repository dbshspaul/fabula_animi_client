<template>
    <div id="hello">
        <div v-show="!loginState" id="firebaseui-auth-container"></div>
        <div v-if="loginState">
            <v-btn v-on:click="signOut" elevation="2" color="accent">Logout</v-btn>
        </div>
    </div>
</template>

<script>

    // Firebase App (the core Firebase SDK) is always required and must be listed first
    import firebase from "firebase/app";
    // If you enabled Analytics in your project, add the Firebase SDK for Analytics
    import "firebase/analytics";
    // Add the Firebase products that you want to use
    import "firebase/auth";
    import "firebase/firestore";
    import * as firebaseui from "firebaseui";
    // If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
    // import * as firebase from "firebase/app"


    const firebaseConfig = {
        apiKey: "AIzaSyAJpGO-ESWUusEun6P--5QWZ4BXXe1GdZY",
        authDomain: "fabula-animi.firebaseapp.com",
        projectId: "fabula-animi",
        storageBucket: "fabula-animi.appspot.com",
        messagingSenderId: "1070538885038",
        appId: "1:1070538885038:web:23fa02bde487a2539baa3f",
        measurementId: "G-TC4T1L7RGW"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                loginState: false
            }
        },
        methods: {
            signOut() {
                let _this = this;
                firebase.auth().signOut().then(() => {
                    _this.loginState = false;
                    _this.renderAuthUI();
                }).catch((error) => {
                    console.error("Error", error);
                });
            },
            renderAuthUI() {
                let ui = new firebaseui.auth.AuthUI(firebase.auth());

                let uiConfig = {
                    signInOptions: [
                        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                        firebase.auth.EmailAuthProvider.PROVIDER_ID,
                        firebase.auth.GoogleAuthProvider.PROVIDER_ID
                    ],
                    callbacks: {
                        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                            console.log("success signin", authResult);
                            console.log("redirectUrl", redirectUrl);
                            return true;
                        },
                        uiShown: function () {
                            // The widget is rendered.
                            // Hide the loader.
                            // document.getElementById('loader').style.display = 'none';
                        }
                    },
                    signInFlow: 'popup',
                    signInSuccessUrl: 'http://localhost:8080/restricted'
                };

                ui.start('#firebaseui-auth-container', uiConfig);
            }
        },
        mounted() {
            let _this = this;
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    _this.loginState = true;
                    // alert(JSON.stringify(user))
                } else {
                    _this.loginState = false;
                    _this.renderAuthUI();
                }
            });


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "~firebaseui/dist/firebaseui.css";

    #firebaseui-auth-container {
        box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
        padding: 10px;
        overflow: hidden;
        width: 390px;
        background: #fff;
        border-radius: 10px;

    }

    #hello {
        width: 100%;
        min-height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 15px;
        background: #f2f2f2;
    }
</style>
