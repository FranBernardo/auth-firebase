<template>
    <div>
        <h3>Esqueci a senha</h3>
        <div v-if="MsgError !== ''" class="" role="alert">
                {{ MsgError }}
            </div>
        <div v-if="MgsSucess !== ''" class="" role="alert">
                {{ MgsSucess }}
            </div>
        <form @submit.prevent="forgotPasswordt">
        <input type="email"  v-model="email"  placeholder="Email">
        <button>Forgot</button>
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