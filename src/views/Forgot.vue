<template>
    <div>
        <div  class="col-12 text-center mb-9">
             <h3>Esqueci a senha</h3>
        </div>
       
        <div v-if="MsgError !== ''" class="alert alert-info" role="alert">
                {{ MsgError }}
            </div>
        <div v-if="MgsSucess !== ''" class="alert alert-info" role="alert">
                {{ MgsSucess }}
            </div>
        <form @submit.prevent="forgotPasswordt">
        <input type="email"  v-model="email" class=" form-control form-control-lg input" placeholder="Coloque seu email">
        <div class="mt-3">
            <button class="btn btn-primary">Enviar Email</button>
        </div>
        
        </form>
    </div>
</template>
<script>
import firebase from "firebase";
export default {
    name: "Forgot",
    data (){
        return {
            email: "",
            MgsSucess: "",
            MsgError: "",
        }
    },
    methods: {
        forgotPasswordt(){
            let A = this;

            A.MgsSucess = "";
            A.MsgError = "";

            firebase.auth().sendPasswordResetEmail(A.email)
            .then(() => {
                A.MgsSucess = "link de recuperação enviado para seu email"
                
            },
            (error) => {
                let errorResposta = JSON.parse(error.message);
                A.MsgError = errorResposta.error.message;

            }
            
            );
        }
    }
}
</script>