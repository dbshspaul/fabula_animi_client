<template>
    <v-card
            elevation="2"
    >
        <v-card-title>
            Your magic link
        </v-card-title>
        <v-card-subtitle>
            Your magic link already generated
        </v-card-subtitle>
        <v-card-text>
            <a :href="link" ref="mylink">{{link}} </a>
            <v-icon
                    color="green darken-2"
                    @click="copyURL"
            >
                mdi-content-copy
            </v-icon>
        </v-card-text>
        <v-card-actions>
            <v-spacer>
                <ShareNetwork :network="item.network" :url="link" title="Tell me about me"
                              v-for="(item,index) in shareMedia"
                              :key="index">
                    <v-icon large>mdi-{{item.icon}}</v-icon>
                </ShareNetwork>
            </v-spacer>

        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "MyLink",
        data() {
            return {
                link: 'https://fabula-animi.web.app/#/fabula-animi/' + this.$store.state.uid,
                // link: 'http://localhost:8080/#/fabula-animi/' + this.$store.state.uid,
                shareMedia: [
                    {"network": "Email", "icon": "email"},
                    {"network": "EverNote", "icon": "evernote"},
                    {"network": "Facebook", "icon": "facebook"},
                    {"network": "LinkedIn", "icon": "linkedin"},
                    {"network": "Messenger", "icon": "facebook-messenger"},
                    {"network": "Pinterest", "icon": "pinterest"},
                    {"network": "Reddit", "icon": "reddit"},
                    {"network": "Skype", "icon": "skype"},
                    {"network": "SMS", "icon": "message-processing"},
                    // {"network": "Telegram", "icon": "buffer"},
                    {"network": "Twitter", "icon": "twitter"},
                    {"network": "WhatsApp", "icon": "whatsapp"}
                ]
            }
        },
        methods: {
            copyURL() {
                let _this = this;
                navigator.clipboard.writeText(this.link).then(function() {
                    _this.$toast.success("Link copied successfully");
                }, function() {
                    _this.$toast.error("Failed to copy link");
                });
            }
        }
    }
</script>

<style scoped>

</style>