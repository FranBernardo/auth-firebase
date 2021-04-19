<template>
    <div class="row">
        <div class="col-12 text-center mb-9">
            <h1>Criar conta</h1>
        </div>
        <div class="col-sm-6 m-auto">
            <div v-if="errorMessage !== ''" class="" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="" role="alert">
                {{ successMessage }}
            </div>
            <form @submit.prevent="signupRequest" id="signup-form">
                <div class="container">
                    <div class="mb-3">
                       
                        <input type="email" id="email" v-model="email" class=" form-control form-control-lg input" placeholder="Email" >
                    </div>
                    <div class="mb-3">
                        
                        <input type="password" id="password" v-model="password" class=" form-control form-control-lg input" placeholder="Senha">
                    </div>
                    <div class="">
                        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="btn btn-primary mb-4">
                            <span v-if="! xhrRequest">Registrar-se</span>
                            <span v-if="xhrRequest">Carregando...</span>
                        </button>
                        <div v-if="xhrRequest" class="" role="status">
                            <span >Loading...</span>
                        </div>
                    </div>
                    <div class="">
                        <p>
                            Já possui conta?
                            <router-link to="/login">Entrar</router-link>
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
                    v.successMessage = "Registrado com Sucesso.";
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