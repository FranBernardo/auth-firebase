<template>
    <div class="">
        <div class="">
            <h1>Log In</h1>
        </div>
        <div class="">
            <div v-if="errorMessage !== ''" class="" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="" role="alert">
                {{ successMessage }}
            </div>
            <form @submit.prevent="loginRequest" id="login-form">
                <div class="">
                    <div class="">
                        <label for="email">Email Address</label>
                        <input type="email" v-model="email" id="email" class="">
                    </div>
                    <div class="">
                        <label for="password">Password</label>
                        <input type="password" v-model="password" id="password" class="">
                        <p>Forgot password? <router-link to="/forgot">Forgot</router-link></p>
                    </div>
                    <div class="">
                        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="">
                            <span v-if="! xhrRequest">Login</span>
                            <span v-if="xhrRequest">Please Wait...</span>
                        </button>
                        <div v-if="xhrRequest" class="" role="status">
                            <span class="">Loading...</span>
                        </div>
                    </div>
                    <div class="">
                        <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import firebase from "firebase";

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            xhrRequest: false,
            errorMessage: "",
            successMessage: ""
        }
    },
    methods: {
        loginRequest() {
            let v = this;

            v.xhrRequest = true;
            v.errorMessage = "";
            v.successMessage = "";

            firebase.auth().signInWithEmailAndPassword(v.email, v.password).then(
                () => {
                    this.$router.replace('dashboard')
                    v.xhrRequest = false;
                }, 
                (error) => {
                    v.errorMessage = error.message;
                    v.xhrRequest = false;
                }
            )
        }
    }
}
</script>
<style scoped>
.loader {
    position:relative;
    top:6px;
    left:10px;
}
</style>