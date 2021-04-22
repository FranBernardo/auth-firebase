<template>
    <div class="row">
        <div class="col-12 text-center mb-9">
            <h1>Login </h1>
            
            
        </div>
        <div class="col-sm-6 m-auto">
            <div v-if="errorMessage !== ''" class="" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="" role="alert">
                {{ successMessage }}
            </div>
            <form @submit.prevent="loginRequest" id="login-form" class="form">
                <div class="container">
                    <div class="mb-3">
                       
                        <input type="email" v-model="email" id="email" class=" form-control form-control-lg input" placeholder="Email">
                    </div>
                    <div class="m-top">
                        
                        <input type="password" v-model="password" id="password" class="form-control form-control-lg input" placeholder="Senha">
                        <p class="mt-2">Esqueceu sua senha? <router-link to="/forgot">clique aqui</router-link></p>
                    </div>
                    <div class="">
                        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="btn btn-danger mb-4">
                            <span v-if="! xhrRequest">Entrar</span>
                            <span v-if="xhrRequest">Carregando...</span>
                        </button>
                        <div v-if="xhrRequest" class="" role="status">
                            <span class="">Loading...</span>
                        </div>
                    </div>
                    <div class="">
                        <p>Não possui conta? <router-link to="/signup">Criar conta</router-link></p>
                    </div>
                </div>
                <img src=".././assets/foods-go-logo.png" class="rounded mx-auto d-block" alt="">
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
                    this.$router.replace('About')
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
img{
    
  width: 100px;
  margin: 10px 0 40px;

}
.input {
  flex: 1;
  height: 30px;
  color: #777;
  font-size: 15px;
  width: 60%;
  margin: auto;
  border: 1px solid #ddd;
}
</style>