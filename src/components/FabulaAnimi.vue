<template>
    <div>
        <v-card
                elevation="2"
        >
            <v-card-title>
                Fabula Animi
            </v-card-title>
            <v-container fluid>
                <v-textarea
                        name="input-7-1"
                        filled
                        outlined
                        label="Your thoughts"
                        auto-grow
                        v-model="message"
                        hint="Your Fabula Animi"
                ></v-textarea>
            </v-container>

            <v-card-actions>
                <v-spacer></v-spacer>
                    <vue-recaptcha v-show="!notRobot" sitekey="6Lc0C-caAAAAALn1YUeHsddSy--ol6YLRPDyCfjf"
                                   :loadRecaptchaScript="true"
                                   @verify="onVerify" ref="recaptcha" @expired="onExpired">
                    </vue-recaptcha>
                    <v-btn
                            v-if="notRobot"
                            outlined
                            text
                            color="primary"
                            elevation="2"
                            @click="post"
                    >
                        Post
                    </v-btn>

            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import VueRecaptcha from "vue-recaptcha";
    import DbOperation from "../service/DbOperation";

    export default {
        name: "FabulaAnimi",
        components: {
            VueRecaptcha
        },
        data() {
            return {
                message: "",
                notRobot: false
            }
        },
        methods: {
            onVerify() {
                this.notRobot = true;
            },
            onExpired: function () {
                this.notRobot = false;
            },
            resetRecaptcha() {
                this.notRobot = false;
                this.$refs.recaptcha.reset()
            },
            post(){
                if (this.notRobot){
                    this.resetRecaptcha();
                    let dbOperation = new DbOperation();
                    dbOperation.saveMessage(this.$route.params.id, this.message)
                        .then(value => {
                            console.log(value);
                            this.$router.push("/thank-you");
                        })
                        .catch(reason => console.log(reason));
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>