<template>
    <div id="login">
        <div v-show="!loginState" id="firebaseui-auth-container"></div>
        <div v-if="loginState">
            <v-btn v-on:click="signOut" elevation="2" color="accent">Logout</v-btn>
        </div>
    </div>
</template>

<script>

    import firebase from "firebase/app";
    import "firebase/analytics";
    import "firebase/auth";
    import "firebase/firestore";
    import * as firebaseui from "firebaseui";


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
                }).catch((error) => {
                    console.error("Error", error);
                });
            },
            renderAuthUI() {
                let _this = this;
                let ui = new firebaseui.auth.AuthUI(firebase.auth());

                let uiConfig = {
                    signInOptions: [
                        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                        firebase.auth.EmailAuthProvider.PROVIDER_ID,
                        firebase.auth.GoogleAuthProvider.PROVIDER_ID
                    ],
                    callbacks: {
                        signInSuccessWithAuthResult: function () {
                            _this.$router.push("home")
                                .catch(() => {});
                            return true;
                        },
                        uiShown: function () {
                            // The widget is rendered.
                            // Hide the loader.
                            // document.getElementById('loader').style.display = 'none';
                        }
                    },
                    signInFlow: 'popup',
                    // signInSuccessUrl: '/home'
                };

                ui.start('#firebaseui-auth-container', uiConfig);
            }
        },
        mounted() {
            let _this = this;
            _this.renderAuthUI();
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    _this.loginState = true;
                } else {
                    _this.loginState = false;
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

    #login {
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
