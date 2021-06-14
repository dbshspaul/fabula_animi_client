<template>
    <div>
        <div id="home">
            <v-card
                    class="card"
                    elevation="2"
                    shaped
                    v-for="(item,index) in items"
                    :key="index"
            >{{item.message}}
            </v-card>
        </div>
    </div>
</template>

<script>

    import DbOperation from "../service/DbOperation";

    export default {
        name: "Home",
        data() {
            return {
                items: []
            }
        },
        components: {},
        methods: {},
        mounted() {
            let _this = this;
            let dbOperation = new DbOperation();
            dbOperation.getMessage()
                .then(value => {
                    value.forEach((doc) => {
                        _this.items.push(doc.data());
                    });
                   })
                .catch(reason => console.log(reason));
        }
    }
</script>

<style scoped>
    .card {
        padding: 25px;
        margin-bottom: 10px;
    }

    #home {
        width: 100%;
        min-height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        background: #f2f2f2;
        padding: 15px;
    }
</style>