import Login from "./components/Login";
import Router from "vue-router";
import Home from "./components/Home";
import Details from "./components/Details";
import FabulaAnimi from "./components/FabulaAnimi";
import MyLink from "./components/MyLink";
import ThankYou from "./components/ThankYou";

export default class {
    configRouter(vue) {
        vue.use(Router);
        return new Router({
            routes: [
                {path: "/login", name: "login", component: Login},
                {path: "/thank-you", name: "thank-you", component: ThankYou},
                {path: "/link", name: "link", component: MyLink},
                {path: "/fabula-animi/:id", name: "fabula-animi", component: FabulaAnimi},
                {path: "/home", name: "home", component: Home},
                {path: "/details", name: "details", component: Details}
            ]
        });
    }
}