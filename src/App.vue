<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">


    <div id="app" data-app>
        <v-card>
            <v-app-bar dark>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
                    </template>
                    <v-list>
                        <v-list-item
                                v-for="(item, index) in items"
                                :key="index"
                                @click="$router.push(item.path)"
                        >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>


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
            <v-sheet>
                <v-container>
                    <router-view></router-view>
                </v-container>
            </v-sheet>
        </v-card>
    </div>
</template>

<script>
    import firebase from "firebase/app";
    require("firebase/firestore");

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
        data() {
            return {
                items: [
                    {title: 'Home', path: "/home"},
                    {title: 'My Link', path: "/link"},
                ]
            }
        },
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
