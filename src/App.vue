<template>


    <div id="app">
        <v-card  class="overflow-hidden">
            <v-app-bar dark absolute elevate-on-scroll scroll-target="#scrolling-techniques-7">
                <v-toolbar-title>Welcome {{$store.state.name}}</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-icon
                        v-if="$store.state.uid!=''"
                        large
                        color="green darken-2"
                        @click="signOut"
                >
                    mdi-logout
                </v-icon>
            </v-app-bar>
            <v-sheet id="scrolling-techniques-7" class="overflow-y-auto">
                <v-container>
                    <router-view></router-view>
                </v-container>
            </v-sheet>
        </v-card>
    </div>
</template>

<script>
    import firebase from "firebase/app";

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
        name: 'App',
        components: {},
        mounted() {
            let _this = this;
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    _this.$store.commit("token", user.za);
                    _this.$store.commit("uid", user.uid);
                    _this.$store.commit("name", user.displayName);
                    _this.$router.push("home")
                        .catch(() => {
                        });
                } else {
                    _this.$store.commit("token", "");
                    _this.$store.commit("uid", "");
                    _this.$store.commit("name", "");
                    _this.$router.push("login")
                        .catch(() => {
                        });
                }
            });
        },
        methods: {
            signOut() {
                let _this = this;
                firebase.auth().signOut().then(() => {
                    _this.$store.commit("token", "");
                    _this.$store.commit("uid", "");
                    _this.$store.commit("name", "");
                    _this.$router.push("login")
                        .catch(() => {
                        });
                }).catch((error) => {
                    console.error("Error", error);
                });
            },
        }
    }
</script>

<style>
    @import "~vuetify/dist/vuetify.min.css";

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
