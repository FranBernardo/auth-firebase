<template>
    <div class="">
        <div class="">
            <h1>Sign Up</h1>
        </div>
        <div class="">
            <div v-if="errorMessage !== ''" class="" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="" role="alert">
                {{ successMessage }}
            </div>
            <form @submit.prevent="signupRequest" id="signup-form">
                <div class="">
                    <div class="">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" v-model="email" class="">
                    </div>
                    <div class="">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="password" class="">
                    </div>
                    <div class="">
                        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="">
                            <span v-if="! xhrRequest">Sign Up</span>
                            <span v-if="xhrRequest">Please Wait...</span>
                        </button>
                        <div v-if="xhrRequest" class="" role="status">
                            <span >Loading...</span>
                        </div>
                    </div>
                    <div class="">
                        <p>
                            Already have an account? 
                            <router-link to="/login">Login</router-link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import firebase from "firebase";
export default {
    name: "Signup",
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
        signupRequest() {

            let v = this;
            v.xhrRequest = true;
            v.errorMessage = "";
            v.successMessage = "";

            firebase
                .auth()
                .createUserWithEmailAndPassword(v.email, v.password).then(
                () => {
                    v.successMessage = "Register Successfully.";
                    v.xhrRequest = false;
                },
                ( error ) => {
                    let errorResponse = JSON.parse(error.message);
                    v.errorMessage = errorResponse.error.message;
                    v.xhrRequest = false;
                }
            );
        }
    }
}
</script>
<style scoped>
._loader {
    position:relative;
    top:6px;
    left:10px;
}
</style>