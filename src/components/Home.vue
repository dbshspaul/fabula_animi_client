<template>
    <div>
        <div id="home">
            <v-card
                    class="card"
                    elevation="2"
                    shaped
                    v-for="item in items"
                    :key="item"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.{{item}}
            </v-card>
        </div>

    </div>
</template>

<script>

    export default {
        name: "Home",
        data() {
            return {
                items: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        },
        components: {},
        methods: {}
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
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background: #f2f2f2;
        padding: 15px;
    }
</style>