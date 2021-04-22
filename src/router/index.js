import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import firebase from "firebase";

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
       
       
    },
    {
        path: "/login",
        name: "Login", 
        component: () => import("../views/Login.vue")
    },
    {
        path: "/signUp",
        name: "SignUp", 
        component: () => import("../views/SignUp.vue")
    },
    {
        path: "/forgot",
        name: "Forgot",
        component: () => import("../views/Forgot.vue")
    },
    {
        path: "/home",
        name: "Home",
        component : () => import ("../views/Home.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/About",
        name: "About", 
        component: () => import("../views/About.vue"),
        meta: {
            requiresAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const authenticatedUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    
    if ( requiresAuth && ! authenticatedUser ) {
        alert("You are not authorized to access this area.");
        next("login");
    }
    else {
        next();
    }
});

export default router;
