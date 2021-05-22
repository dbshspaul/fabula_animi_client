import Login from "./components/Login";
import Router from "vue-router";
import Home from "./components/Home";
import Details from "./components/Details";

export default class {
    configRouter(vue) {
        vue.use(Router);
        return new Router({
            routes: [
                {path: "/login", name: "login", component: Login},
                {path: "/home", name: "home", component: Home},
                {path: "/details", name: "details", component: Details}
            ]
        });
    }
}